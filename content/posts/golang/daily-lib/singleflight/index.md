---
title: "Singleflight"
summary: ""
date: 2023-04-25T15:23:16+08:00
lastmod: 2023-04-25T23:32:27+08:00
categories: ["go"]
series: [daily lib]
tags: ["缓存"]
comments: true
showtoc: true
searchHidden: false
hidemeta: false
draft: false
weight:
cover:
    image: "cover.webp"
    alt: "cover"
    relative: true
    hidden: true
---

## 介绍

`singleflight` 来源于准官方库 `golang.org/x/sync/singleflight`，能够抑制对下游的多次重复请求。主要提供了以下三个方法：

```go
// Do():  相同的 key，fn 同时只会执行一次，返回执行的结果给 fn 执行期间，所有使用该 key 的调用
// v: fn 返回的数据
// err: fn 返回的err
// shared: 表示返回数据是调用 fn 得到的还是其他相同 key 调用返回的
func (g *Group) Do(key string, fn func() (interface{}, error)) (v interface{}, err error, shared bool)

// DoChan(): 类似 Do() 方法，以 chan 返回结果
func (g *Group) DoChan(key string, fn func() (interface{}, error)) <-chan Result

// Forget(): 失效 key，后续对此 key 的调用将执行 fn，而不是等待前面的调用完成
func (g *Group) Forget(key string)
```

## 使用方法

```go
package main

import (
	"context"
	"fmt"
	"golang.org/x/sync/singleflight"
	"sync/atomic"
	"time"
)

type Result string

func find(ctx context.Context, query string) (Result, error) {
	return Result(fmt.Sprintf("result for %q", query)), nil
}

func main() {
	var g singleflight.Group
	const n = 5
	waited := int32(n)
	done := make(chan struct{})
	key := "https://weibo.com/1227368500/H3GIgngon"
	for i := 0; i < n; i++ {
		go func(j int) {
			v, _, shared := g.Do(key, func() (interface{}, error) {
				ret, err := find(context.Background(), key)
				return ret, err
			})
			if atomic.AddInt32(&waited, -1) == 0 {
				close(done)
			}
			fmt.Printf("index: %d, val: %v, shared: %v\n", j, v, shared)
		}(i)
	}

	select {
	case <-done:
	case <-time.After(time.Second):
		fmt.Println("Do hangs")
	}
}
```

输出结果如下：

```text
index: 1, val: result for "https://weibo.com/1227368500/H3GIgngon", shared: true
index: 2, val: result for "https://weibo.com/1227368500/H3GIgngon", shared: true
index: 4, val: result for "https://weibo.com/1227368500/H3GIgngon", shared: true
index: 3, val: result for "https://weibo.com/1227368500/H3GIgngon", shared: true
index: 0, val: result for "https://weibo.com/1227368500/H3GIgngon", shared: true
```

## 注意事项

比较常见的业务场景是直接使用 `singleflight.Do` 方法，这在极端情况下可能会导致参与竞争的 `goroutine` 全部阻塞。例如从数据库读取数据并写入缓存中这个场景，如果 `singleflight.Do` 方法内部调用的函数因为某种原因阻塞住了，那么会导致所有等待缓存数据的 `goroutine` 全部阻塞。换言之，singleflight 是以牺牲成功率的代价控制了并发量。	

那么该如何解决以上问题呢？

作为 `Do()` 的替代函数，`singleflight` 提供了 `DoChan()`。两者实现上完全一样，不同的是，`DoChan()` 通过 channel 返回结果，因此可以使用 select 语句实现超时控制。

```go
var g singleflight.Group
var wg sync.WaitGroup	// 通过wg控制主进程在其它goroutine结束后再结束
const n = 5
key := "https://weibo.com/1227368500/H3GIgngon"
for i := 0; i < n; i++ {
    go func(j int) {
        wg.Add(1)
        defer wg.Done()
        ch := g.DoChan(key, func() (interface{}, error) {
            ret, err := find(context.Background(), key)
            return ret, err
        })
        timeout := time.After(500 * time.Millisecond)

        var ret singleflight.Result
        select {
        case ret = <-ch:
            fmt.Printf("index: %d, val: %v, shared: %v\n", j, ret.Val, ret.Shared)
        case <-timeout:
            fmt.Printf("%d: timeout\n", j)
            return
        }
    }(i)
}
wg.Wait()
```

输出结果与 Do 示例类似。



在一些对可用性要求极高的场景下，往往需要一定的请求饱和度来保证业务的最终成功率。一次请求还是多次请求，对于下游服务而言并没有太大区别，此时使用 `singleflight` 只是为了降低请求的数量级，那么可以使用 `Forget()` 提高下游请求的并发：

```go
v, _, shared := g.Do(key, func() (interface{}, error) {
    go func() {
        time.Sleep(10 * time.Millisecond)
        fmt.Printf("Deleting key: %v\n", key)
        g.Forget(key)
    }()
    ret, err := find(context.Background(), key)
    return ret, err
})
```

当有一个并发请求超过 10ms，那么将会有第二个请求发起，此时只有 10ms 内的请求最多发起一次请求，即最大并发：100 QPS。单次请求失败的影响大大降低。

当然，如果单次的失败无法容忍，在高并发的场景下更好的处理方案是：

1. 放弃使用同步请求，牺牲数据更新的实时性
2. “缓存” 存储准实时的数据 + “异步更新” 数据到缓存

## 内部实现

见 [singleflight内部实现](./singleflight内部实现.html) 



## 参考

[sync.singleflight 到底怎么用才对？](https://www.cyningsun.com/01-11-2021/golang-concurrency-singleflight.html) 

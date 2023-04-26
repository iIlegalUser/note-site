---
title: "Pie"
summary: ""
date: 2023-04-25T23:32:27+08:00
lastmod: 2023-04-25T23:32:27+08:00

categories: ["go"]
series: ["daily lib"]
tags: ["集合运算"]

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

[pie](https://github.com/elliotchance/pie) 封装了**对切片和 map 的常用操作,能满足工作中的大部分需求**。比如计算切片的交集、差集；对切片中元素按条件过滤的 Filter 函数；对切片中元素进行数据转换的 Each、Map 函数等。

pie v2 版本需要 Go 1.18+。Go1.17 及以下版本需要使用 v1 版本。

## 使用示例

```go
func TestPie(t *testing.T) {
   name := pie.Of([]string{"Bob", "Sally", "John", "Jane"}).
      FilterNot(func(name string) bool {
         return strings.HasPrefix(name, "J")
      }).
      Map(strings.ToUpper).
      Last()

   fmt.Println(name) // "SALLY"
}
```

## pie 包的目标

- **类型安全**：无论是在 v1 版本还是 v2 版本的泛型中，都对类型做了限制，所以不会遇到运行时类型错误。
- **高性能**：该库需要跟原生的 Go 实现一样快，否则该库封装就没有意义。
- **Nil 安全**：该库的所有函数都能接收 nil 参数，并将其视为空切片，而不会引起 panic。
- **对原切片无副作用**：所有的函数对传入的切片参数都不会做修改。

## pie 包支持的功能

- 切片中的元素是否全部或任意一个满足指定的条件。
  - All 函数：判断切片中的元素是否都满足指定的条件。
  - Any 函数：判断切片中的元素只要有 1 个满足指定条件即可。

- 对切片元素进行排序功能。
  - AreSorted 函数：判断切片是否是有序的
  - Sort 函数：对切片元素进行排序。
  - SortStableUsing 函数：使用指定的条件对切片进行排序，并且具有稳定性。
  - SortUsing 函数

- 对切片中的元素去重。
  - 判断切片中的元素是否不重复的 AreUnique 函数、去重函数 Unique

- 对切片进行前、后截取。
  - Bottom 函数：取切片后 n 个元素
  - Top 函数：取切片前 n 个元素
  - DropTop 函数：丢掉切片的前 n 个元素，并返回剩余的元素切片

- 两个或多个切片之间的集合运算
  - Diff 函数：计算两个切片中的差集
  - Intersect 函数：计算两个或多个切片的交集


```go
func TestDiff(t *testing.T) {
	added, removed := pie.Diff([]string{"a", "b", "c"}, []string{"b", "c", "d"})
	fmt.Println(added, removed) // [d] [a]
}

func TestIntersect(t *testing.T) {
	ss2 := pie.Intersect([]string{"a", "b", "c"}, []string{"b", "c", "d"})
	fmt.Println(ss2) // [c b]
}
```



- 切片元素进行算数运算功能（只针对 Integer 和 float 类型的切片有效）。
  - Max 函数：返回切片中的最大元素
  - Min 函数：返回切片中的最小元素
  - Product 函数：对切片所有元素进行乘积运算
  - Sum 函数：对切片中所有元素进行求和运算
  - Average 函数：求所有元素的平均值
- 对切片中的元素进行数据转换功能：Each、Map、Filter、Flat、Reducer

```go
func TestEach(t *testing.T) {
	pie.Of([]string{"Bob", "Sally", "John", "Jane"}).
		Each(func(s string) {
			fmt.Println(s)
		})
}
```



- 针对 map 的操作：
  - Keys 函数：获取 map 的所有键
  - Values 函数：获取 map 的所有值

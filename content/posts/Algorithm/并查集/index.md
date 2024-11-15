---
title: "并查集"
date: 2023-10-22T10:50:47+08:00

categories: ["Algotithm"]
tags: ["Struct"]

math: true
mermaid: false
draft: false

cover:
    image: "/cover/038.webp"
    alt: "cover"
    relative: true
---

并查集（Disjoint Set Union）是一种用于管理元素所属集合的数据结构，实现为一个森林，其中每棵树表示一个集合，树中的节点表示对应集合中的元素。

顾名思义，并查集支持两种操作：

- 合并（Union）：合并两个元素所属集合（合并对应的树）
- 查询（Find）：查询某个元素所属集合（查询对应的树的根节点），这可以用于判断两个元素是否属于同一集合

## 实现

```java
public class DSU {
  int[] pa, size;

  public DSU(int n) {
    pa = new int[n];
    size = new int[n];

    for (int i = 0; i < n; i++) {
      pa[i] = i;
    }
    Arrays.fill(size, 1);
  }

  public int find(int z) {
    return pa[z] == z ? z : (pa[z] = find(pa[z]));
  }

  public void union(int x, int y) {
    int fx = find(x), fy = find(y);

    if (fx == fy)   return;
    int larger = size[fx] >= size[fy] ? fx : fy;
    int smaller = larger == fx ? fy : fx;
    pa[smaller] = larger;
    size[larger] += size[smaller];
  }
}
```

## 时空复杂度

同时使用路径压缩和启发式合并之后，并查集的每个操作平均时间仅为 $O(\alpha(n))$，其中 $\alpha$ 为阿克曼函数的反函数，其增长极其缓慢，也就是说其单次操作的平均运行时间可以认为是一个很小的常数。

空间复杂度：$O(n)$ 

## 例题

[1] [LeetCode 547. 省份数量](https://leetcode.cn/problems/number-of-provinces/) 

[2] [LeetCode 2316. 统计无向图中无法互相到达点对数](https://leetcode.cn/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/) 

## 参考

[1] [并查集 - OI Wiki](https://oi-wiki.org/ds/dsu) 

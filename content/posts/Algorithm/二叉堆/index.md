---
title: "二叉堆"
date: 2023-10-22T15:05:52+08:00

categories: ["Algorithm"]
tags: ["Heap", "Struct"]

math: false
mermaid: false
draft: false

cover:
    image: "/cover/039.webp"
    alt: "cover"
    relative: true
---

从二叉堆的结构说起，它是一棵二叉树，并且是完全二叉树，每个结点中存有一个元素（或者说，有个权值）。

堆性质：父亲的权值不小于儿子的权值（大根堆）。同样的，我们可以定义小根堆。本文以大根堆为例。

## 实现

1. 一般实现

```java
public class Heap3 {
  int[] h;
  int n;

  public Heap3(int[] nums) {
    h = nums;
    n = nums.length;
    for (int i = n - 2; i >= 0; i--) {
      sink(i);
    }
  }

  public void sink(int x) {
    while (x * 2 + 1 < n) {
      int c = x * 2 + 1;
      if (c + 1 < n && h[c + 1] > h[c]) {
        c++;
      }
      if (h[x] >= h[c]) return;
      swap(x, c);
      x = c;
    }
  }

  public void rise(int x) {
    while (x > 0 && h[x - 1 >> 1] < h[x]) {
      swap(x, x - 1 >> 1);
      x = x - 1 >> 1;
    }
  }

  public void swap(int x, int y) {
    int t = h[x];
    h[x] = h[y];
    h[y] = t;
  }
}
```



2. 带泛型实现

```java
/**
 * 默认大根堆
 * @param <T>
 */
public class Heap2<T extends Comparable<T>> {
  private int n;
  private final T[] h;
  private final Comparator<? super T> comp;

  public Heap2(T[] h) {
    this.h = h;
    this.comp = Comparable::compareTo;
    this.n = h.length;
    heapify();
  }

  public Heap2(T[] h, Comparator<? super T> comp) {
    this.h = h;
    this.comp = comp;
    this.n = h.length;
    heapify();
  }

  private void heapify() { heapify(0, n); }

  /**
     * 在 [l,r) 之间堆化
     * @param l 左边界
     * @param r 右边界
     */
  private void heapify(int l, int r) {
    for (int i = r - 2; i >= l; i--) {
      sink(i, r);
    }
  }

  private void sink(int x) { sink(x, n); }

  private void sink(int x, int r) {
    while (x * 2 + 1 < r) {
      int c = x * 2 + 1;
      if (c + 1 < r && comp.compare(h[c + 1], h[c]) > 0) {
        c++;
      }
      if (comp.compare(h[c], h[x]) <= 0) return;
      swap(x, c);
      x = c;
    }
  }

  private void rise(int x) {
    while (x > 0 && comp.compare(h[x - 1 >> 1], h[x]) < 0) {
      swap(x, x - 1 >> 1);
      x = x - 1 >> 1;
    }
  }

  public void updateFirst(T newData) { update(h[0], newData); }

  public void update(T oldData, T newData) {
    for (int i = 0; i < n; i++) {
      if (h[i].equals(oldData)) {
        h[i] = newData;
        if (comp.compare(newData, oldData) > 0)  rise(i);
        else sink(i);
        return;
      }
    }
  }

  public T poll() {
    swap(0, --n);
    sink(0);
    return h[n];
  }

  public boolean isEmpty() { return h == null || n == 0; }

  private void swap(int i, int j) {
    if (i < 0 || j < 0) return;
    T tmp = h[i];
    h[i] = h[j];
    h[j] = tmp;
  }

  // 按大小顺序输出
  @Override
  public String toString() {
    StringBuilder builder = new StringBuilder();
    builder.append("[");
    int k = n;
    while (!isEmpty()) {
      builder.append(poll()).append(", ");
    }
    n = k;
    heapify();
    builder.delete(builder.length() - 2, builder.length());
    builder.append("]");
    return builder.toString();
  }
  // 按堆数组顺序输出
  public String toString2() {
    StringBuilder builder = new StringBuilder();
    builder.append("[");
    for (int i = 0; i < n - 1; i++) {
      builder.append(h[i]).append(", ");
    }
    builder.append(h[n - 1]).append("]");
    return builder.toString();
  }
}
```



## 参考

[1] [二叉堆 - OI Wiki](https://oi-wiki.org/ds/binary-heap/) 

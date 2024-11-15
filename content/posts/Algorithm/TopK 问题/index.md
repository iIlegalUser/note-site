---
title: "TopK 问题"
date: 2023-07-18T21:05:09+08:00

categories: ["Algorithm"]
tags: ["Algorithm", "Heap"]

draft: false
math: true

cover:
    image: "/cover/032.webp"
    alt: "cover"
    relative: true
---

TopK 问题指的是寻找数组第 $K$ 大/小的元素。一种简单的做法是对数组排序，然后取第 $K$ 个元素，时间复杂度为 $O(NlogN)$，接下来以寻找第 $K$ 大的元素为例，介绍另外两种做法。

## 快速选择算法

在快速排序算法中，每一轮排序至少会将一个元素排列到正确位置上，该元素左侧元素均小于它，右侧元素均大于它，基于此性质，我们可以快速找到这样一个元素：在满足快速排序的同时，它右侧的元素正好有 $K - 1$ 个。

```java
public int select(int[] arr, int k, int l, int r) {
  if (l > r) {
    return -1;
  }
  int i = l, j = r;
  
  // 随机交换，尽量避免最坏情况
  swap(arr, l, (int) Math.floor(Math.random() * (r - i + 1)) + l);
  int pivot = arr[i];
  
  // 快速排序算法内容
  while (i < j) {
    while (i < j && arr[j] > pivot) {
      j--;
    }
    if (i < j) {
      arr[i++] = arr[j];
    }
    while (i < j && arr[i] < pivot) {
      i++;
    }
    if (i < j) {
      arr[j--] = arr[i];
    }
  }
  arr[i] = pivot;

  // 计算当前排名
  int rank = r - i + 1;
  if (rank == k) {
    return arr[i];
  }
  if (rank > k) {
    return select(arr, k, i + 1, r);
  }
  // 注意k发生了变化
  return select(arr, k - rank, l, i - 1);
}

/**
 * 返回数组中第 k 大的元素
 * @param k 1<=k<=arr.length
 * @return  数组中第 k 大的元素
 */
public int select(int[] arr, int k) {
  if (arr == null || k > arr.length || k < 1) {
    return -1;
  }
  return select(arr, k, 0, arr.length - 1);
}
```

快速选择算法平均和最好时间复杂度为 $O(N)$，最坏时间复杂度为 $O(N^2)$ ，因为我们已经随机选择 pivot，所以能够最大程度上的减少最坏情况发生。空间复杂度和快速排序一致： $O(logN)$。**注意此算法会破坏原数组结构**。

## 最小堆

维护一个大小为 $K$ 的最小堆，遍历数组，将数组中大于堆顶的元素加入堆中，最后堆顶的元素就是我们要找的第 $K$ 大的数。

```java
public int select(int[] arr, int k) {
  if (arr == null || k > arr.length || k < 1) {
    return -1;
  }

  Queue<Integer> queue = new PriorityQueue<>(k);

  for (int i : arr) {
    if (queue.size() < k) {
      queue.add(i);
    } else if (i > queue.peek()) {
      queue.poll();
      queue.add(i);
    }
  }

  return queue.poll();
}
```

此算法的时间复杂度为 $O(NlogK)$，空间复杂度为 $O(K)$。

## 对顶堆

考察下面这个问题

维护一个序列，支持两种操作：

1. 向序列中插入一个元素
2. 输出并删除当前序列的中位数（若序列长度为偶数，则输出较小的中位数）

这个问题可以被进一步抽象成：动态维护一个序列上第 $K$ 大的数，$K$ 值**可能会发生变化**。对于此类问题，我们可以使用 **对顶堆** 这一技巧予以解决。

对顶堆由一个大根堆与一个小根堆组成，小根堆维护大值即前 $K$ 大的值（包含第 $K$ 个)，大根堆维护小值即比第 $K$ 大数小的其他数。

这两个堆构成的数据结构支持以下操作：

- 维护：当小根堆的大小小于 $K$ 时，不断将大根堆堆顶元素取出并插入小根堆，直到小根堆的大小等于 $K$；当小根堆的大小大于 $K$ 时，不断将小根堆堆顶元素取出并插入大根堆，直到小根堆的大小等于 $K$；
- 插入元素：若插入的元素大于等于小根堆堆顶元素，则将其插入小根堆，否则将其插入大根堆，然后维护对顶堆；
- 查询第 $K$ 大元素：小根堆堆顶元素即为所求；
- 删除第 $K$ 大元素：删除小根堆堆顶元素，然后维护对顶堆；
- $K$ 值 $+1/-1$：根据新的 $K$ 值直接维护对顶堆。

显然，查询第 $k$ 大元素的时间复杂度是 $O(1)$ 的。由于插入、删除或调整 $K$ 值后，小根堆的大小与期望的值 $K$ 最多相差 $1$，故每次维护最多只需对大根堆与小根堆中的元素进行一次调整，因此，这些操作的时间复杂度都是 $O(\log N)$ 的。

```java
public class MedianHeap {
  // 大根堆
  public Queue<Integer> a;
  // 小根堆
  public Queue<Integer> b;

  public MedianHeap() {
    a = new PriorityQueue<>(Comparator.reverseOrder());
    b = new PriorityQueue<>();
  }

  public void insert(int x) {
    if (!b.isEmpty() && x > b.peek()) {
      b.offer(x);
    } else {
      a.offer(x);
    }
    balance();
  }

  public int median() {
    int ans;
    if (b.size() > a.size()) {
      ans = b.poll();
    } else {
      ans = a.isEmpty() ? -1 : a.poll();
    }
    balance();
    return ans;
  }

  private void balance() {
    if (Math.abs(a.size() - b.size()) > 1) {
      Queue<Integer> more = a.size() > b.size() ? a : b;
      Queue<Integer> less = more == a ? b : a;
      while (more.size() - less.size() > 1) {
        less.offer(more.poll());
      }
    }
  }
}
```

## 参考

[1] [Top K 问题的最优解 - 快速选择算法（Quickselect）](https://zhuanlan.zhihu.com/p/64627590) 

[2] [快速排序](https://www.cnblogs.com/skywang12345/p/3596746.html) 

[3] [二叉堆 #对顶堆](https://oi-wiki.org/ds/binary-heap/#对顶堆) 

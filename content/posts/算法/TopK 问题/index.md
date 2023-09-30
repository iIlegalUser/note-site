---
title: "TopK 问题"
date: 2023-07-18T21:05:09+08:00

categories: ["Algorithm"]
series: []
tags: ["Algorithm"]

draft: false
math: true

cover:
    image: "032.webp"
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

## 参考

[1] [Top K 问题的最优解 - 快速选择算法（Quickselect）](https://zhuanlan.zhihu.com/p/64627590) 

[2] [快速排序](https://www.cnblogs.com/skywang12345/p/3596746.html) 

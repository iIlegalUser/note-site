---
title: "基础问题"
date: 2023-10-10T21:49:17+08:00

categories: ["Algorithm"]
series: []
tags: ["Algorithm"]

math: true
mermaid: false
draft: false

cover:
    image: "037.webp"
    alt: "cover"
    relative: true
---

1. 计算数组中所有数在数轴上两两之间的距离的和

例如：`[1,2,4,9]`，结果为 `(2-1)+(4-1)+(9-1)+(4-2)+(9-2)+(9-4)=26`；

思路：从小到大枚举 $nums[i]$，此时左边有 $i$ 个数字，右边有 $n-i$ 个数字（算上 $nums[i]$），所以共有 $i×(n−i)$ 对数字在计算距离时会累加 $nums[i] - nums[i-1]$。我们依次遍历完 $[1,n-1]$ 范围内所有的 $nums[i]$，将 $(nums[i] - nums[i - 1]) * i * (n - i)$ 累加到答案中即可。

```java
public int calc(int[] nums) {
  int ans = 0;
  for (int i = 1, n = nums.length; i < n; i++) {
    ans += (nums[i] - nums[i - 1]) * i * (n - i);
  }
  return ans;
}
```



2. 计算数组两两乘积之和

例如：`[1,2,4,9]`，结果为 `1*2 + 1*4 + 1*9 + 2*4 + 2*9 + 4*9 = 77`；

思路：首先计算数组和 `sum`，每一项对最终结果的贡献就是 `nums[i] * (sum - nums[i])`，但是每一项最终会被计算两遍，所以需要除以 2。自己想想就能证明。

```java
public long calc(int[] nums) {
  long ans = 0;
  int sum = Arrays.stream(nums).sum();
  for (int num : nums) {
    ans += (long) num * (sum - num);
  }
  return ans >> 1;
}
```


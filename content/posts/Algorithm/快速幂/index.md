---
title: "快速幂"
date: 2023-10-09T14:34:52+08:00

categories: ["Algorithm"]
series: []
tags: ["Algorithm"]

math: true
mermaid: false
draft: false

cover:
  image: "036.webp"
  alt: "cover"
  relative: true
---

快速幂，二进制取幂（Binary Exponentiation，也称平方法），是一个在 $O(\log n)$ 的时间内计算 $a^n$ 的小技巧，而暴力的计算需要 $O(n)$ 的时间。

## 过程

首先将 $n$ 表示为二进制，例如

{{< mathb >}}
$$
3^{13}=3^{(1101)_2}=3^8 \cdot 3^4 \cdot 3^1 
$$
{{</ mathb>}}

因为 $n$ 有 $[\log_2n]+1$ 个二进制位，所以只需要计算 $\log(n)$ 次乘法就可以计算出 $a^n$ 。

于是我们只需要知道一个快速的方法来计算上述 3 的 $2^k$ 次幂的序列。这个问题很简单，因为序列中（除第一个）任意一个元素就是其前一个元素的平方。举一个例子：

{{< mathb >}}
$$
\begin{align}
3^1 &= 3 \\
3^2 &= \left(3^1\right)^2 = 3^2 = 9 \\
3^4 &= \left(3^2\right)^2 = 9^2 = 81 \\
3^8 &= \left(3^4\right)^2 = 81^2 = 6561
\end{align}
$$
{{</ mathb>}}

因此为了计算 $3^{13}$，我们只需要将对应二进制位为 1 的整系数幂乘起来就行了：

{{< mathb >}}
$$
3^{13} = 6561 \cdot 81 \cdot 3 = 1594323
$$
{{</ mathb>}}

## 一般实现

递归实现：

```java
// a:底数； b:指数
long binpow(long a, long b) {
  if (b == 0)	return 1;
  long res = binpow(a, b >> 1);
  if ((b & 1) == 1) 
    return res * res * a;
  return res * res;
}
```

非递归实现：

```java
// a:底数； b:指数
long binpow(long a, long b) {
  long res = 1;
  while (b > 0) {
    if ((b & 1) == 1)	res *= a;
    a *= a;
    b >>= 1
  }
  return res;
}
```

## 模意义下实现

计算 $x^n\bmod m$ 。

取模的运算不会干涉乘法运算，因此我们只需要在计算的过程中取模即可。

```java
long binpow(long a, long b, long m) {
  a %= m;
  long res = 1;
  while (b > 0) {
    if ((b & 1) == 1) res = res * a % m;
    a = a * a % m;
    b >>= 1;
  }
  return res;
}
```

根据费马小定理，如果 $m$ 是一个质数，我们可以计算 $x^{n\bmod(m-1)}$ 来加速算法过程。

## 参考

[1] [快速幂 - OI Wiki](https://oi-wiki.org/math/binary-exponentiation) 

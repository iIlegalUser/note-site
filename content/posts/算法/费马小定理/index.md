---
title: "费马小定理"
date: 2023-09-03T11:20:41+08:00

categories: [算法]
series: []
tags: []

math: true
draft: true

cover:
    image: "033.webp"
    alt: "cover"
    relative: true
---

## 定义

若 $p$ 为素数，$\gcd (a,p)=1$ （即 $a,p$ 互质），有 $a^{p-1}\equiv1\pmod{p}$  

另一种形式：对于任意整数 $a$，有 $a^p\equiv a\pmod{p}$ 

## 证明

数学归纳法证明：

显然 $1^p\equiv 1\pmod{p}$，假设 $a^p\equiv a\pmod{p}$ 成立，需要证明 $(a+1)^p\equiv a+1\pmod{p}$。

{{< mathjax >}}
$$
\begin{aligned}
&根据二项式定理有
(a+1)^p=a^p+\begin{pmatrix}p\\1 \end{pmatrix}a^{p-1}+\begin{pmatrix}p\\2 \end{pmatrix}a^{p-2}+\cdots+\begin{pmatrix}p\\p-1 \end{pmatrix}a+1\\[1ex]
&\because 1\le k\le p-1时，\begin{pmatrix}p\\k \end{pmatrix}=\cfrac{p(p-1)\cdots(p-k+1)}{k!}\\
&\therefore \begin{pmatrix}p\\1 \end{pmatrix}\equiv \begin{pmatrix}p\\2 \end{pmatrix}\equiv \cdots\equiv \begin{pmatrix}p\\p-1 \end{pmatrix}\equiv0\pmod{p}\\[1ex]
&\therefore(a+1)^p\equiv a^p+1\pmod{p}\\[1ex]
&\because a^p\equiv a\pmod{p}\\[1ex]
&\therefore (a+1)^p\equiv a+1\pmod{p}\\[1ex]
&\therefore原式得证
\end{aligned}
$$
{{< /mathjax >}}

## 参考

[1] [欧拉定理 & 费马小定理](https://oi-wiki.org/math/number-theory/fermat/#%E8%B4%B9%E9%A9%AC%E5%B0%8F%E5%AE%9A%E7%90%86) 

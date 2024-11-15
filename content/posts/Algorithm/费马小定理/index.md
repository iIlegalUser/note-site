---
title: "费马小定理"
date: 2023-09-03T11:20:41+08:00

categories: ["Algorithm"]
series: []
tags: ["Algorithm", "Math"]

math: true
draft: false

cover:
    image: "/cover/033.webp"
    alt: "cover"
    relative: true
---

## 逆元

逆元通常是用来解决除法求模问题的，求模运算有以下法则：

{{< mathb >}}
$$
\begin{cases}
(a+b)\%c&=&(a\%c+b\%c)\%c\quad &加法法则\\[1ex]
(a-b)\%c&=&(a\%c-b\%c)\%c\quad &减法法则\\[1ex]
(a*b)\%c&=&(a\%c*b\%c)\%c\quad &乘法法则
\end{cases}
$$
{{</ mathb >}}

可以发现，除法求模没有相应的法则。当计算 $\cfrac{a}{b}\%c$ 时，如果 $a$，$b$ 很大，不能在计算完之后取模，可以通过变换将除法变为乘法，然后就可以通过上面的公式取模了。

设 {{<mathi>}}$b*k\%c=1${{</mathi>}} ，则有

{{<mathb>}}
$$
\cfrac{a}{b}\%c=\cfrac{a}{b}\%c*(b*k\%c)=(a*k)\%c
$$
{{</mathb>}}

这样就把除法转化为了乘法，这里的 $k$ 就叫做 $b$ 关于 $c$ 的乘法逆元，写成数学表达式就是

{{<mathb>}}
$$
bk\equiv1\pmod c
$$

{{</mathb>}}

## 定义

若 $p$ 为素数，$\gcd (a,p)=1$ （即 $a,p$ 互质），有 $a^{p-1}\equiv1\pmod{p}$  

另一种形式：对于任意整数 $a$，有 $a^p\equiv a\pmod{p}$ 

乘法逆元形式：$a×a^{p-2}\equiv1\pmod p$ ，即 $a$ 的逆元是 $a^{p-2}$。

## 证明

数学归纳法证明：

显然 $1^p\equiv 1\pmod{p}$，假设 $a^p\equiv a\pmod{p}$ 成立，需要证明 $(a+1)^p\equiv a+1\pmod{p}$。

{{<mathb>}}
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
{{</mathb>}}

## 求解组合数

求解 $C_m^n$ ，最终结果对 $10^9+7$ 取模。

方法一：由杨辉三角有 $C_m^n = C_{m-1}^{n-1} + C_{m-1}^{n}$ ，可以通过动态规划求解，时间复杂度 $O(N^2)$ 

```java
int f(int m, int n) {
    int[][] dp = new int[m + 1][n + 1];	
    for (int i = 0; i < m + 1; i++)
        dp[i][0] = 1;   // C_m^0 = 1
    for (int i = 1; i < m + 1; i++) {
        for (int j = 1; j < n + 1; j++) {
            dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % MOD;
        }
    }
    return dp[m][n];
}
```

方法二：快速幂+费马小定理

{{<mathb>}}
$$
\begin{align*}
C_m^n &= \cfrac{m!}{(m-n)!*n!}\%MOD\\[1ex]
&= \cfrac{(m-n+1)*(m-n+2)*...*m}{1*2*...*n}\% MOD \\ 
\end{align*}
$$

{{</mathb>}}

设 {{<mathi>}} $a=(m-n+1)*(m-n+2)*\ldots *m,b=1*2*\ldots *n$ {{</mathi>}}，那么现在就要求 $b$ 对于 $p$ 的乘法逆元。将原式拆分为 {{<mathi>}}$\cfrac{a}{1}*\cfrac{a}{2}*...\cfrac{a}{n}$ {{</mathi>}}，则只需要计算 $i(1\le i\le n)$ 的逆元。根据费马小定理得逆元 $k = i^{p-2} \%p$ 。

```java
// 非递归快速幂对p取模
public int nqpow(int a, int n, int p) {
  long res = 1, a1 = a;
  while (n != 0) {
    if ((n & 1) == 1) {  // n是奇数
      res = res * a1 % p;	// 注意此处和下面不能缩写成 res *= a1 % p;
    }
    a1 = a1 * a1 % p;
    n >>= 1;
  }
  return (int) res;
}
int f(int m, int n) {
  long res = 1;
  for (int i = m - n + 1; i <= m; i++)
    res = res * i % MOD;    // 计算分子
  for (int i = 1; i <= n; i++)
    res = res * nqpow(i, MOD - 2, MOD) % MOD;  // 计算分母
  return (int) res;
}
```

## 参考

[1] [欧拉定理 & 费马小定理](https://oi-wiki.org/math/number-theory/fermat/#%E8%B4%B9%E9%A9%AC%E5%B0%8F%E5%AE%9A%E7%90%86) 

# 常用Markdown数学公式语法

## 行内与独行
1. 行内
    `$xyz$` => $xyz$
1. 独行
    `$$xyz$$` => $$xyz$$

## 上标、下标与组合
1. 上标符号 `$x^4$` => $x^4$
1. 下标符号 `$x_4$` => $x_4$
1. 组合符号 `$x^{-rft}$` => $x^{-rft}$

## 汉字、字体与格式
1. 下划线 `$\underline{x+y}$` => $\underline{x+y}$
1. 上大括号 `$\overbrace{a+b+c+d}^{2.0}$` => $\overbrace{a+b+c+d}^{2.0}$
1. 下大括号 `$a+\underbrace{b+c}_{1.0}+d$` => $a+\underbrace{b+c}_{1.0}+d$
1. 上位符号 `$\vec{x}\stackrel{\mathrm{def}}{=}{x_1,\dots,x_n}$` => $\vec{x}\stackrel{\mathrm{def}}{=}{x_1,\dots,x_n}$

## 占位符
1. 空格符号 `$x \quad y$` => $x \quad y$
1. 俩个空格符号 `$x \qquad y$` => $x \qquad y$
1. 大空格 `$x \ y$` => $x \ y$
1. 中空格 `$x : y$` => $x : y$
1. 小空格 `$x , y$` => $x , y$
1. 紧贴 `$x!y$` => $x!y$

## 定界符号与组合
1. 括号 `$（）\big(\big) \Big(\Big) \bigg(\bigg) \Bigg(\Bigg)$` => $（）\big(\big) \Big(\Big) \bigg(\bigg) \Bigg(\Bigg)$

1. 中括号 `$[x+y]$` => $[x+y]$
1. 大括号 `${x+y}$` => ${x+y}$
1. 自适应括号 `$\left(x\right)$，$\left(x{yz}\right)$` => $\left(x\right)$，$\left(x{yz}\right)$
1. 组合公式 `${n+1 \choose k}={n \choose k}+{n \choose k-1}$` => ${n+1 \choose k}={n \choose k}+{n \choose k-1}$
1. 组合公式 `$\sum_{k_0,k_1,\ldots>0 \atop k_0+k_1+\cdots=n}A_{k_0}A_{k_1}\cdots$` => $\sum_{k_0,k_1,\ldots>0 \atop k_0+k_1+\cdots=n}A_{k_0}A_{k_1}\cdots$

## 四则运算
1. 加法运算 `$x+y=z$` => $x+y=z$
1. 减法运算 `$x-y=z$` => $x-y=z$
1. 加减运算 `$x \pm y=z$` => $x \pm y=z$
1. 减加运算 `$x \mp y=z$` => $x \mp y=z$
1. 乘法运算 `$x \times y=z$` => $x \times y=z$
1. 点乘运算 `$x \cdot y=z$` => $x \cdot y=z$
1. 星乘运算 `$x \ast y=z$` => $x \ast y=z$
1. 除法运算 `$x \div y=z$` => $x \div y=z$
1. 斜法运算 `$x/y=z$` => $x/y=z$
1. 分式表示 `$\frac{x+y}{y+z}$` => $\frac{x+y}{y+z}$
1. 分式表示 `${x+y} \over {y+z}$` => ${x+y} \over {y+z}$
1. 绝对值表示 `$|x+y|$` => $|x+y|$

## 高级运算
1. 平均数运算 `$\overline{xyz}$` => $\overline{xyz}$
1. 平方根运算 `$\sqrt x$` => $\sqrt x$
1. 开方运算 `$\sqrt[3]{x+y}$` => $\sqrt[3]{x+y}$
1. 对数运算 `$\log(x)$` => $\log(x)$
1. 极限运算 `$\lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$` => $\lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$
1. 极限运算 `$\displaystyle \lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$` => $\displaystyle \lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$
1. 求和运算 `$\sum^{x \to \infty}_{y \to 0}{\frac{x}{y}}$` => $\sum^{x \to \infty}_{y \to 0}{\frac{x}{y}}$
1. 求和运算 `$\displaystyle \sum^{x \to \infty}_{y \to 0}{\frac{x}{y}}$` => $\displaystyle \sum^{x \to \infty}_{y \to 0}{\frac{x}{y}}$
1. 积分运算 `$\int^{\infty}_{0}{xdx}$` => $\int^{\infty}_{0}{xdx}$
1. 积分运算 `$\displaystyle \int^{\infty}_{0}{xdx}$` => $\displaystyle \int^{\infty}_{0}{xdx}$
1. 微分运算 `$\frac{\partial x}{\partial y}$` => $\frac{\partial x}{\partial y}$

## 逻辑运算
1. 大于等于运算 `$x+y \geq z$` => $x+y \geq z$
1. 小于等于运算 `$x+y \leq z$` => $x+y \leq z$
1. 不等于运算 `$x+y \neq z$` => $x+y \neq z$
1. 不大于等于 `$x+y \ngeq z$` => $x+y \ngeq z$
1. 不大于等于 `$x+y \not\geq z$` => $x+y \not\geq z$
1. 不小于等于 `$x+y \nleq z$` => $x+y \nleq z$
1. 不小于等于 `$x+y \not\leq z$` => $x+y \not\leq z$
1. 约等于运算 `$x+y \approx z$` => $x+y \approx z$
1. 恒定等于运算 `$x+y \equiv z$` => $x+y \equiv z$

## 集合运算
1. 属于运算 `$x \in y$` => $x \in y$
1. 不属于运算 `$x \notin y$` => $x \notin y$
1. 不属于运算 `$x \not\in y$` => $x \not\in y$
1. 子集运算 `$x \subset y$` => $x \subset y$
1. 子集运算 `$x \supset y$` => $x \supset y$
1. 真子集运算 `$x \subseteq y$` => $x \subseteq y$
1. 非真子集运算 `$x \subsetneq y$` => $x \subsetneq y$
1. 真子集运算 `$x \supseteq y$` => $x \supseteq y$
1. 非真子集运算 `$x \supsetneq y$` => $x \supsetneq y$
1. 非子集运算 `$x \not\subset y$` => $x \not\subset y$
1. 并集运算 `$x \cup y$` => $x \cup y$
1. 交集运算 `$x \cap y$` => $x \cap y$
1. 差集运算 `$x \setminus y$` => $x \setminus y$
1. 同或运算 `$x \bigodot y$` => $x \bigodot y$
1. 同与运算 `$x \bigotimes y$` => $x \bigotimes y$
1. 实数集合 `\mathbb{R}` => $\mathbb{R}$
1. 自然数集合 `\mathbb{Z}` => $\mathbb{Z}$
1. 空集 `$\emptyset$` => $\emptyset$

## 数学符号
1. 无穷 `$\emptyset$` => $\emptyset$
1. 虚数 `$\imath$` => $\imath$
1. 虚数 `$\jmath$` => $\jmath$
1. 数学符号 `$\hat{a}$` => $\hat{a}$
1. 数学符号 `$\check{a}$` => $\check{a}$
1. 数学符号 `$\breve{a}$` => $\breve{a}$
1. 数学符号 `$\tilde{a}$` => $\tilde{a}$
1. 数学符号 `$\bar{a}$` => $\bar{a}$
1. 矢量符号 `$\vec{a}$` => $\vec{a}$
1. 数学符号 `$\acute{a}$` => $\acute{a}$
1. 数学符号 `$\grave{a}$` => $\grave{a}$
1. 数学符号 `$\mathring{a}$` => $\mathring{a}$
1. 一阶导数符号 `$\dot{a}$` => $\dot{a}$
1. 二阶导数符号 `$\ddot{a}$` => $\ddot{a}$
1. 上箭头 `$\uparrow$` => $\uparrow$
1. 上箭头 `$\Uparrow$` => $\Uparrow$
1. 下箭头 `$\downarrow$` => $\downarrow$
1. 下箭头 `$\Downarrow$` => $\Downarrow$
1. 左箭头 `$\leftarrow$` => $\leftarrow$
1. 左箭头 `$\Leftarrow$` => $\Leftarrow$
1. 右箭头 `$\rightarrow$` => $\rightarrow$
1. 右箭头 `$\Rightarrow$` => $\Rightarrow$
1. 底端对齐的省略号 `$1,2,\ldots,n$` => $1,2,\ldots,n$
1. 中线对齐的省略号 `$x_1^2 + x_2^2 + \cdots + x_n^2$` => $x_1^2 + x_2^2 + \cdots + x_n^2$
1. 竖直对齐的省略号 `$\vdots$` => $\vdots$
1. 斜对齐的省略号 `$\ddots$` => $\ddots$


## 希腊字母
字母|实现|字母|实现
--|:--:|:--:|--:
A|A|$\alpha$|`$\alpha$`|
B|B|$\beta$|`$\beta$`|
$\Gamma$|`$\Gamma$`|$\gamma$|`$\gamma$`|
$\Delta$|`$\Delta$`|$\delta$|`$\delta$`|
E|E|$\epsilon$|`$\epsilon$`|
Z|Z|$\zeta$|`$\zeta$`|
H|H|$\eta$|`$\eta$`|
$\Theta$|`$\Theta$`|$\theta$|`$\theta$`|
I|I|$\iota$|`$\iota$`|
K|K|$\kappa$|`$\kappa$`|
$\Lambda$|`$\Lambda$`|$\lambda$|`$\lambda$`|
M|M|$\mu$|`$\mu$`|
N|N|$\nu$|`$\nu$`|
$\Xi$|`$\Xi$`|$\xi$|`$\xi$`|
O|O|$\omicron$|`$\omicron$`|
$\Pi$|`$\Pi$`|$\pi$|`$\pi$`|
P|P|$\rho$|`$\rho$`|
$\Sigma$|`$\Sigma$`|$\sigma$|`$\sigma$`|
T|T|$\tau$|`$\tau$`|
$\Upsilon$|`$\Upsilon$`|$\upsilon$|`$\upsilon$`|
$\Phi$|`$\Phi$`|$\phi$|`$\phi$`|
X|X|$\chi$|`$\chi$`|
$\Psi$|`$\Psi$`|$\psi$|`$\psi$`|
$\Omega$|`$\Omega$`|$\omega$|`$\omega$`|


## 参考
[Markdown数学公式语法](https://www.jianshu.com/p/e74eb43960a1)
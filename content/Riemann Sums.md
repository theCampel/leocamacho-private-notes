### What?
It's the formula for calculating the sum of all of those rectangles under a function (Leading to the idea of [[Integrals]]). 

### Riemann Sums and Area Under a Curve

- Let $f(x)$ be a continuous function and $P$ is a subsection in the interval
- Let $\Delta x$ be the width of each subinterval $[x_{i-1}, x_i]$ -> $\Delta x = \frac{b-a}{n}$
- For each $i$, let $x_i^*$ be ***any point*** in $[x_{i-1}, x_i]$. -> $x_i = a + \Delta x \cdot i$


A Riemann sum is defined for $f(x)$ as

$$
\sum_{i=1}^{n} f(x_i^*)\Delta x
$$

The ***area under the curve*** where $y = f(x)$ is a continuous, non-negative function on an interval $[a, b]$ is given by:

$$
A = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*)\Delta x
$$
(As the sum grows, the delta shrinks, the approximation becomes more accurate)

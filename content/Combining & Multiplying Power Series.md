
### Combining [[Power Series]]

#### Theorem

Suppose that the two power series $\sum_{n=0}^{\infty} c_n x^n$ and $\sum_{n=0}^{\infty} d_n x^n$ converge to the functions $f$ and $g$, respectively, on a common interval $I$.

i. The power series $\sum_{n=0}^{\infty} c_n x^n \pm d_n x^n$ converges to $f \pm g$ on $I$.

ii. For any integer $m \geq 0$ and any real number $b$, the power series $\sum_{n=0}^{\infty} b^m c_n x^n$ converges to $b^m f(x)$ on $I$.

iii. For any integer $m \geq 0$ and any real number $b$, the series $\sum_{n=0}^{\infty} c_n (bx^m)^n$ converges to $f(bx^m)$ for all $x$ such that $bx^m$ is in $I$.

***Intuition***: If you can represent functions $f$ and $g$ as two power series, then $f\pm g$ is the sum of those two power series. Also multiplying a constant to the power series is equivalent to multiplying the function by it. Pt3 lowkey intuitive already.


### Multiplying Power Series
#### Theorem

Suppose that the power series $\sum_{n=0}^{\infty} c_n x^n$ and $\sum_{n=0}^{\infty} d_n x^n$ converge to the functions $f$ and $g$, respectively, on a common interval $I$. Let

$e_n = c_0d_n + c_1d_{n-1} + c_2d_{n-2} + \ldots + c_{n-1}d_1 + c_nd_0 = \sum_{k=0}^{n} c_k d_{n-k}$.

Then,

$\left(\sum_{n=0}^{\infty} c_n x^n\right)\left(\sum_{n=0}^{\infty} d_n x^n\right) = \sum_{n=0}^{\infty} e_n x^n$,

and $\sum_{n=0}^{\infty} e_n x^n$ converges to $f(x) \cdot g(x)$ on $I$.

The series $\sum_{n=0}^{\infty} e_n x^n$ is known as the Cauchy product of the series $\sum_{n=0}^{\infty} c_n x^n$ and $\sum_{n=0}^{\infty} d_n x^n$.

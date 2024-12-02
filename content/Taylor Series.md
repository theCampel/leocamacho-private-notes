Ok. There was a physics problem where the movement of a pendulum around a small angle was $R(1-Cos(\theta))$. And then... Just like magic, the student represented that function as $R(\frac{\theta^2}{2})$... WHATTTT???

> [!definition] What are Taylor [[Series]]?
> They're a way of representing *non-polynomials* ***as*** *polynomials*. A key point to note (that's also pretty cool about them) is that they translate **derivative** information at a *single point* to a output ***around*** that *point*.

### Taylor Series Formula:
If $f$ has derivatives, of all orders, at $f(a)$, then the Taylor series for the function $f$ at $a$ is

$$
\sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x - a)^n = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \ldots + \frac{f^{(n)}(a)}{n!}(x - a)^n + \ldots
$$
### Maclaurin Series:
The Taylor series for $f$ at 0 is known as the Maclaurin series for $f$. Pretty scummy to legit get a whole new name for it when Taylor did all the work but ok...

### What happens if you extend the [[series]] out into infinity?
Well, if it only ever gets better and better at representing it, then it's known to ***converge***. Otherwise, if it hits a point on either side of the original point that it oscillates around, then it's known to ***diverge***. The points on either side are known as the ***[[Radius of Convergence]]***.

### Important Series to Remember:
| Function, $f(x)$         | Expansion                                                 | Series Expansion, $\sum$                                                                            | Interval of Convergence                          |
| ------------------------ | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| $e^x$                    | $\sum_{n=0}^{\infty} \frac{x^n}{n!}$                      | $1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$                                                  | $(-\infty, \infty)$                              |
| $\sin(x)$                | $\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}$     | $x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots$                                     | $(-\infty, \infty)$                              |
| $\cos(x)$                | $\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}$         | $1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots$                                     | $(-\infty, \infty)$                              |
| $\ln(1 + x)$             | $\sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^n}{n}$            | $x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots$                                        | $(-1, 1)$                                        |
| $\frac{1}{1-x}$          | $\sum_{n=0}^{\infty} x^n$                                 | $1 + x + x^2 + x^3 + \cdots$                                                                        | $(-1, 1)$                                        |
| $(1 + x)^\alpha$         | $\sum_{n=0}^{\infty} \frac{(α)_n x^n}{n!}$                | $1 + \alpha x + \frac{\alpha(\alpha-1)x^2}{2!} + \frac{\alpha(\alpha-1)(\alpha-2)x^3}{3!} + \cdots$ | $(-1, 1)$, if $\alpha$ is not a positive integer |
| $\arctan(x)$             | $\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1}$        | $x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots$                                        | $[-1, 1]$                                        |
| $\sinh(x)$               | $\sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!}$            | $x + \frac{x^3}{3!} + \frac{x^5}{5!} + \frac{x^7}{7!} + \cdots$                                     | $(-\infty, \infty)$                              |
| $\cosh(x)$               | $\sum_{n=0}^{\infty} \frac{x^{2n}}{(2n)!}$                | $1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \frac{x^6}{6!} + \cdots$                                     | $(-\infty, \infty)$                              |
| Bessel Function $J_0(x)$ | $\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{2^{2n} (n!)^2}$ | $1 - \frac{x^2}{2^2} + \frac{x^4}{2^24^2} - \frac{x^6}{2^26^24^2} + \cdots$                         | $(-\infty, \infty)$                              |


| Function                   | Series Expansion Notation                                                          |
| -------------------------- | ---------------------------------------------------------------------------------- |
| $\ln(1 - x)$               | $\sum_{n=1}^{\infty} \frac{x^n}{n}$                                                |
| $\ln(x)$                   | $\sum_{n=1}^{\infty} \frac{(-1)^{n-1} (x-1)^n}{n}$                                 |
| $\ln(1 + x)$               | $\sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^n}{n}$                                     |
| $\ln(\frac{1 + x}{1 - x})$ | $\sum_{n=1}^{\infty} \frac{2 x^{2n-1}}{2n-1}$                                      |
| $\frac{1}{x}$              | $\sum_{n=0}^{\infty} (-1)^n (x-1)^n$                                               |
| $\frac{1}{(1 + x)}$        | $\sum_{n=0}^{\infty} (-1)^n x^n$                                                   |
| $\frac{1}{1 + x^2}$        | $\sum_{n=0}^{\infty} (-1)^n x^{2n}$                                                |
| $\frac{1}{1 - x^2}$        | $\sum_{n=0}^{\infty} x^{2n}$                                                       |
| $\frac{1}{(1 + x)^2}$      | $\sum_{n=1}^{\infty} (-1)^{n-1}n x^{n-1}$                                          |
| $\frac{1}{(1 - x)^2}$      | $\sum_{n=1}^{\infty} n x^{n-1}$                                                    |
| $\tan(x)$                  | $\sum_{n=1}^{\infty} \frac{(-1)^{n-1} 2^{2n} (2^{2n} - 1) B_{2n} x^{2n-1}}{(2n)!}$ |
| $\sec(x)$                  | $\sum_{n=0}^{\infty} \frac{(-1)^n E_{2n} x^{2n}}{(2n)!}$                           |
| $\csc(x)$                  | $\sum_{n=0}^{\infty} \frac{(-1)^n 2 (2^{2n-1} - 1) B_{2n} x^{2n-1}}{(2n)!}$        |
| $\cot(x)$                  | $\sum_{n=0}^{\infty} \frac{(-1)^n 2^{2n} B_{2n} x^{2n-1}}{(2n)!}$                  |

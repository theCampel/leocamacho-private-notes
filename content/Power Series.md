### What?
It's a way of representing a function, centered around a given point, by a [[Series]]. It's in the form

$$f(x) = \sum_{n=0}^{\infty} a_n(x - c)^n$$

An example of $f(x)=e^x$, where $a_n=\frac{1}{n!}$ and $c=0$. 
$$
f(x)=e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}
$$
### How do you convert / find a Power Series?:
Check [[Converting Function to Power Series]]

### Differentiation / Integration:
Think about it. If they perfectly represent a continuous function, then they're differentiable. We simply differentiate / integrate each term. 

$f'(x) = \sum_{n=1}^{\infty} nc_n (x - a)^{n-1} = c - 1 + 2c_2(x - a) + 3c_3(x - a)^2 + \ldots$

### Relation to [[Taylor Series]]:
Taylor series are simply a specific type of Power Series, except they're about using derivatives at a point to gain information about the function around that point. 

### What happens if you extend the [[series]] out into infinity?
Well, if it only ever gets better and better at representing it, then it's known to ***converge***. Otherwise, if it hits a point on either side of the original point that it oscillates around, then it's known to ***diverge***. The points on either side are known as the ***[[Radius of Convergence]]***.


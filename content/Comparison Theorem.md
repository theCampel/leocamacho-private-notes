### What

Suppose  $f$ and $g$ are continuous with $f(x) \geq g(x) \geq 0$ for all $x \geq a$. Then,

- If $\int_a^{\infty} f(x) \, dx$ converges, then $\int_a^{\infty} g(x) \, dx$ converges (is convergent).
- If $\int_a^{\infty} g(x) \, dx$ diverges, then $\int_a^{\infty} f(x) \, dx$ diverges (is divergent).

Similar statements hold for $\int_{-\infty}^a f(x) \, dx$, and so on, as well as for improper integrals of type 2.

The Comparison Theorem is useful for examples where we only want to know if $\int_a^{\infty} f(x) \, dx$ converges, since perhaps we cannot find the antiderivative of $f$.

### Tip:
Think of similar integrals we know (1/x etc.) and try to compare it relative to that one. 

### Similar for the Limit Comparison Test of [[Series]]

Let $a_n, b_n \geq 0$ for all $n \geq 1$.
1. If $\lim_{n\to\infty} \frac{a_n}{b_n} = L \neq 0$, then $\sum_{n=1}^{\infty} a_n$ and $\sum_{n=1}^{\infty} b_n$ both converge or both diverge.
2. If $\lim_{n\to\infty} \frac{a_n}{b_n} = 0$, and $\sum_{n=1}^{\infty} b_n$ converges, then $\sum_{n=1}^{\infty} a_n$ converges.
3. If $\lim_{n\to\infty} \frac{a_n}{b_n} = \infty$, and $\sum_{n=1}^{\infty} b_n$ diverges, then $\sum_{n=1}^{\infty} a_n$ diverges.

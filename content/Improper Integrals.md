### What:
Sometimes we want to get the [[Integrals|area under a curve]] of integrals where the integrand is discontinuous or unbounded. 

### How?
We substitute a variable into the integrand and solve the limit of that variable:

If $\int_a^t f(x) \, dx$ exists for all $t > a$, we define

$$
\int_a^\infty f(x) \, dx = \lim_{t \to \infty} \int_a^t f(x) \, dx,
$$
$$
\int_{-\infty}^{\infty} f(x) \, dx = \int_{-\infty}^{a} f(x) \, dx + \int_{a}^{\infty} f(x) \, dx.
$$

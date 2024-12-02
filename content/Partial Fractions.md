### Why?
Sometimes, especially when integrating, you have a complicated fraction that you need to simplify. 

### Step 1: Ensure deg(Top) < deg(Bottom):
By long division, ensure the degree of the top is less than the one on the bottom. Factor out denominator
$$
\frac{x^2 - 2x - 35}{x^2 - 3x - 40}\rightarrow1 + \frac{x + 3}{x^2 - 3x - 40}\rightarrow1 + \frac{x + 3}{(x+5)(x-8)}$$

### Step 2: Set up partial fractions:
For this part, write out the actual $A$'s, $B$'s, etc.
- For linear factors $(x - a)$, you add a term $\frac{A}{x-a}$, where A is a constant.
- For repeated linear factors $(x - a)^n$, you add terms $\frac{A_1}{x-a} + \frac{A_2}{(x-a)^2} + \cdots + \frac{A_n}{(x-a)^n}$.
- For irreducible quadratic factors $(ax^2 + bx + c)$, you add a term $\frac{Ax+B}{ax^2+bx+c}$, where A and B are constants.
- For repeated irreducible quadratic factors, the approach is similar to repeated linear factors but with $Ax + B$ in the numerator for each term.

### Step 3: Solve for A's, B's etc.:
Using simultaneous equations, identities, etc, solve for 

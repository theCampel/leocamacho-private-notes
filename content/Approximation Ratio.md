### What?
Take an [[NP Completeness|NP Hard]] problem. In [[Greedy Approximation Algorithms]], we saw the definition for a ***close to optimal solution***. But how do we know if our solution is ***close* to the close to the optimal solution**? The approximation ratio. 

### Formula (For minimisation problems):
$$R = \frac{\text{Cost of Approximation Solution}}{\text{Cost of Optimal Solution}}$$

### Formula (For maximisation problems):
$$R = \frac{\text{Cost of Optimal Solution}}{\text{Cost of Approximation Solution}}$$

### What's a good ratio?
Well the closer to 1 it is, the better. If $R=2$ (for minimisation), then the approximate solution is twice as costly as the optimal solution.


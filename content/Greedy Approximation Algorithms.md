### What:
A specific type of [[Greedy Algorithms]]. These are for when getting exact solutions are largely impractical. Ideally they:
- Run in polynomial time.
- Compute a solution that's *"close"* to the optimal one. (I.E. Reasonably accurate)

### Problem: What's "*close* to optimal"?

> [!danger] Key Idea
> Well if our solution is not far from **something that's *even* smaller than the optimal**, then it surely isn't far from the optimal.
##### Thus, a technique:
Bound the optimal solution *from below* (for minimisation problems - like below) and *above* (for maximisation problems). 
![[Pasted image 20240312114040.png|500]]
### Characteristics: 
1. At each decision, the algorithm chooses the option that's the ***locally optimal*** one. (I.e. looks best at that moment - the *"Greedy"* part).
2. It ***doesn't backtrack*** -  once a choice is made, the algorithm doesn't reconsider it. 
3. They're ***simple and fast***.

### [[Approximation Ratio]]:
$$R = \frac{\text{Cost of Approximation Solution}}{\text{Cost of Optimal Solution}}$$

### Specific Examples:
- [[Load Balancing]]

### Approximating [[NP Completeness|NP Hard Problems]]:
It's really hard to approximate some problems. The best approximation we can get is: [[Polynomial Time Approximation Scheme]]

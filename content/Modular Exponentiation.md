A tough challenge that requires [[Efficiency in Algorithms]]:

Given large numbers $a$, $n$, $m$, compute $a^2 mod m$. (This is a challenge in [[RSA]])

### A (fast) method for solving:
Note it's easy to compute $e = a^n \mod m$ if we've already computed $d=a^{n/2}$
- If n is even, take $e = (d \times d) \mod m$
- if n is odd, take $e = (d \times d \times a) \mod m$
Thus this is a [[Recursive Algorithm]] solution. 


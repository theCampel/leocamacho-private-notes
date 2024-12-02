### What:
Imagine having an unsolved problem *A*. If we have a similar solved problem *B*, then we may be able to transform */* *reduce* *A* into *B*. This closely relates to reducing an [[NP Completeness|NP problem]] into a P problem. 

**Simply**: Can you reduce Problem A into problem B, solve B and in turn solve A in polynomial time? If you can, then that Algorithm (that reduces and solves A with B as a subroutine) is a polynomial time reduction.


### Different Types of Reductions:
- ***Many-One Reduction:*** A specific type of polynomial-time reduction where each instance of problem A is mapped onto a single instance of problem B. 
## In the context of [[Greedy Approximation Algorithms]]:
Given:
- $m$ identical machines $M_{1}, M_{2}, ..., M_m$
- $n$ jobs, each taking time $t_j$
- $A(i)$ is the set of jobs assigned to machine $i$
- ***Load*** of the machine $i$ is $T_i = \sum_{j \in A(i)} t_j$ (I.E. The sum of the time required to complete).
- Goal is to minimise $T$ - the *makespan* (total time taken to complete all jobs by the machine)
	- $T = \max_{i \in M} T_i$
- Optimal solution ($OPT$) is $T^*$

The problem is [[NP Completeness|NP Hard]] for identical machines. 

### Algorithm for this problem:
###### Steps:
- Pick any job
- Assign it to machine with the smallest load
- Remove it from pile of jobs

### Choosing a bounds for this problem:
Well we've actually got 2 bounds:
- Assuming each job is roughly equal sized, the best case scenario is it's the sum of jobs divided by the amount of computers (so each machine can take a roughly  equal load)
	- $T^* \geq \frac{1}{m} \sum_{j=1}^{n} t_j$
- Or: If there's a single job that takes a disproportionately long time, an optimal solution could be however long that task is,
	- $T^* \geq \max_{j} t_j$




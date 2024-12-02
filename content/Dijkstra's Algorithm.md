### What:
A highly efficient shortest-path-finding [[Greedy Algorithms|greedy algorithm]]. Used in Google Maps etc. 

### The Goal:
- ***Input***: A directed graph $G=(V,E)$ and a designated node $s$ (starting node) in $V$. Assume every node $u$ in $V$ is reachable from $s$. We're also given length $l_{e}$ for ever edge $e$ in $E$. (A fully connected graph basically)
- ***Output***: For every node $u$ in $V$, a shortest path from $s \rightarrow u$. (I.E. A list of paths.)

### How it works:
- ***Idea***: Constantly maintain a set $S$ of nodes $u$ for which we've the shortest path from $s$. 
	- $S$ is the explored part insofar.
- **Mathematical Greedy Criteria**: $d'(v) = \min_{e=(u,v), u \in S} \{ d(u) + l_e \}$, where 
	- ***Simple Terms***: At each step / node, the shortest path from $u$ to $v$: Choose the node that's closest to you (minimises *the path to where you are* + *the possible paths around you*). 
	- ***In even simpler terms***: At each step, analyse ever node directly neighbouring your known paths. Jump  to the closest node (***from any known node** in your set of distances*) and update the list of paths you have to include that node. 

### Example:
![[Screenshot 2024-01-20 at 7.04.39 p.m..png]]
- In this iteration, we could jump to either $y$, $x$ (two different ways) or $v$. 
- To minimise distance travelled, we go to either $x$ (through $u$) or $v$. 
- We'd thus add either one to the list of paths. 


### Getting Actual Paths:
As is, we've a list of lengths of paths. To get ***paths***, we simply have to record the edge (the last node) that led us to explore this current node. So you backtrack hopping from node to its respective node that led to it.



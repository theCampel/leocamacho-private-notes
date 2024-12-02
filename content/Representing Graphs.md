## Why:
When writing [[Graphs]] into code, we need to represent them somehow. 

## Representing Graphs
##### Adjacency Matrix
- The $i$th node corresponds to the $i$th row and the $i$th column.
- Undirected graphs have $A[i,j] = A[j,i]$. This is not necessarily the case for directed graphs.
![[Screenshot 2024-01-20 at 3.13.57 p.m..png|500]]

##### Adjacency List
- Nodes arranged as a list. 
- Each list has a sublist of its neighbours. 

***Undirected Example:*** (Node 2 should also have neighbour 1)
![[Screenshot 2024-01-20 at 3.16.14 p.m..png|500]]


***Directed Example:***
![[Screenshot 2024-01-20 at 3.18.12 p.m..png|500]]


### Complexities:
##### Adjacency Matrix
- ***Memory***: $O(n^2)$
- Checking adjacency of u and v
	- ***Time***: $O(1)$
- Finding all adjacent nodes of u
	- ***Time***: O(n)

##### Adjacency List
- ***Memory***: O(m+n)
- Checking adjacency of u and v
	- ***Time***: $O(min(deg(u),deg(v)))$
- Finding all adjacent nodes of u
	- ***Time***: $O(deg(u))$
- ***Better for:*** Sparse graphs, where the $n$ (nodes) >> (much larger) $m$ (number of edges.)


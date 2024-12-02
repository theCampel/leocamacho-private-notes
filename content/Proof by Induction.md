Another type of [[Proofs]]. 

> [!tip] Define:
> If you can show a property holds true for P(0), P(k) and P(k+1), then P(x) holds for all $n \in \mathbb{N}$

### How do you do it?
**Step 1**: Show that the base step is true (P(a)). 
**Step 2**: We need to show that for every integer $k≥a$, if $P(k)$ is true then so it $P(k+1)$. How do we do this? 
	Assume that $P(k)$ is True, where $k$ is any specific but arbitrary integer with $k≥a$. Then, show that $P(k+1)$ is True. 

## Examples:
There's loads. Here's some covered in lectures:
#### For which positive integers $n$ do we have $2^n > 4n$?
$P(N) = 2^n > 4n$
Prove:  P(n) holds for all n>= 5

**Base case**: $2^5 > 4(5)$
**Induction steps**:
Assume P(k) for some $k$ $(\geq5)$
Using this, we will show P(k+1)

$P(k+1)$ says $2^{k+1} > 4(k+1)$
We may use $2^k > 4k$

$2^{k+1} = 2 * 2^{k} > 2 * 4k$ -> Induction hypothesis

$= 4k +4k \geq 4k+4$

So we have shown that P(k) implies P(k+1)
And we have shown that P(5)

So, by PMI (Principal of Mathematical Induction), P(n) holds for all n>=5 which had to be shown. 

### Graph:
Statement: Given a [[Graphs]] with n nodes, without cycles, the number of edges < n, assuming there's at least 1 node
P(n): I will show P(n) by induction
Base Case: P(1). Even a single edge leads to a cycle. So there can be no edges. P(1) is true

2nd Steps: Suppose P(k) holds. We need to show P(k+1). Write a graph with k nodes without cycles. There must be a node with exactly 1 outgoing edge.

Let G' be the graph obtained by delating that node and that 1 edge. G' also does not have cycles. G' has k nodes. 

\therefore G had < k+1 edges. 



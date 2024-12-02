### What:
An ***infinitely ordered list***. The items in it are called ***terms***. EG:
- Sequence of natural numbers: $1,2,3,4,5,...$
- Scores I got when infinitely rolling die: $1,4,2,5,2,...$
- A sum of the subset of terms is called [[Series]]
- 

### Describing a pattern as a formula:
- In the following: 
	- $a$ is the first term
	- $d$ is the common difference
	- $r$ is common ratio (i.e. $T_n/T_{n-1}$)
- For *arithmetic sequences* (constant first difference): 
	- $T_n = a + (n-1)d$
	- $S_n = \frac{n}{2} [2a + (n-1)d]$
- For *geometric sequences* (constant second difference):
	- $T_n = ar^{n-1}$
	- $S_n = \frac{a(1-r^n)}{1-r}$
	- $S_\infty = \frac{a}{1-r}$ (Given $|r| \lt 1$)
``

### Different Types of Sequences
##### Increasing, Decreasing, and Monotone Sequences

A sequence ${a_n}$ is increasing for all $n \geq n_0$ if
$$
a_n \leq a_{n+1} \text{ for all } n \geq n_0.
$$
I.E. if a term is followed by a bigger term every time.


A sequence ${a_n}$ is decreasing for all $n \geq n_0$ if
$$
a_n \geq a_{n+1} \text{ for all } n \geq n_0.
$$
I.E. every term is followed by a lesser term. 


A sequence ${a_n}$ is a monotone sequence for all $n \geq n_0$ if it is increasing for all $n \geq n_0$ or decreasing for all $n \geq n_0$.

I.E. After a certain point, the monotone sequence doesn't change direction. 


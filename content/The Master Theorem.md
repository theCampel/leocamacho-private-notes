A straight forward way of analysing the [[Time Complexity]] of [[Divide and Conquer Algorithms]]. 

## The 3 Buckets:
##### Setup:
Given a [[Recurrence Relation]], in the form below, it categorises the time complexity of the relation into 3 time complexities.


**RR**: $$T(n) = aT(\frac{n}{b}) + f(n)$$
***Alternative Form***: $$
T(n) = 
\begin{cases} 
\Theta(1) & \text{if } n \leq n_0 \\
aT\left(\frac{n}{b}\right) + \Theta(n^k) & \text{if } n > n_0 
\end{cases}
$$

**Where**:
- $n$ is the size of the problem
- $a \ge 1$ is the number of subproblems
- $b > 1$ is the factor by which the problem is reduced (ie $\frac{n}{b}$ is the size of each subproblem)
- $f(n) = \Theta(n^k)$  is the time cost of dividing the problem and combining the results of the sub-problems
- $aT(\frac{n}{b})$ is the time cost of solving each smaller problem

##### By Latex:
Where $e=log⁡_b(a)$,
$$
T(n) = 
\begin{cases} 
O(n^e) & \text{if } e > k \\
O(n^k \log n) & \text{if } e = k \\
O(n^k) & \text{if } e < k 
\end{cases}
$$

##### Case 1:
- **Formally**: If $f(n)$ is $O(n^{log_{b}{(a−ϵ)}})$ for some $ϵ>0$, then $T(n)=Θ(n^{log⁡_b(a)})$.
- **Informally**: If the cost of dividing and combining takes less time than solving the smaller problems, then the time complexity is dominated by solving the smaller problems. 

##### Case 2:
- **Formally**: If $f(n)$ is $Θ(n^{log⁡_{b}(a)}\times log⁡_{k}(n))$ for a $k≥0$, then $T(n)=Θ(n^{log⁡_{b}(a)}\times \log_⁡{k+1}{(n)})$
- **Informally**: If the cost of dividing (and combining) the problem and the cost of solving the smaller problems is the same time complexity, you multiply the amount of time it takes for one level by the number of levels. 

##### Case 3:
- **Formally**: If $f(n)$ is $Ω(n^{log⁡_{b}{(a+ϵ)}})$ for some $ϵ>0$, and if $af(\frac{n}{b})≤kf(n)$ for some constant $k<1$ and sufficiently large $n$, then $T(n)=Θ(f(n))$
- **Informally**: If the cost of dividing them up is an [[Asymptotic Bounding (Big O)|asymptotic bound above]] solving the subproblems, then the time complexity is that of dividing them up. 

##### Where tf did the log stuff come from?:
Read the *last message* from [here](https://chat.openai.com/share/02cab990-2867-44bd-8dcb-c5cf2183c1f4). (Dead link 😔)
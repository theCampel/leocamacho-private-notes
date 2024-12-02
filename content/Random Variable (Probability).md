Given a sample space S, it's a rule that associates a number with each outcome in $S$. 

> [!summary] GPT's Example
> Imagine you're at a carnival, and there's a game where you throw a ball at a set of cans. The number of cans you knock down will determine the prize you get.
> 
> *[[Sample Space]] (S)*: This is like the entire set of all possible outcomes from throwing the ball. In this case, it's every possible combination of cans that could be knocked down (including knocking none at all).
> 
> *Experiment*: The act of throwing the ball and seeing how many cans fall is the experiment.
> 
> *Random Variable (rv)*: This is like the person at the booth who watches your throw and then assigns points to you based on the number of cans you knock down. This "rule" of assigning points is the random variable.

X(s) = x means that x is the value associated with the outcome s by the $rv\ X$

Example2.2 Consider the experiment in which a telephone number in a certain area code is dialed using a random number dialer (such devices are used extensively by polling organisations), and define an $rv$ $Y$ by:

$$
Y = \begin{cases} 
1 & \text{if the selected number is unlisted} \\
0 & \text{if the selected number is listed in the directory}
\end{cases}
$$

For example, if 5282966 appears in the telephone directory, then Y(5282966) = 0, whereas Y(7727350) = 1 tells us that the number 7727350 is unlisted. A word description of this sort is more economical than a complete listing, so we will use such a description whenever possible. 

**Discrete RV**: is a countable, integer RV.
**Continuous RV**: The decimal possibilities of RVs. Interestingly, the $P(X=x) = 0$. Why? Well because there's an infinite amount of CRVs between $a$ and $b$, that the possibility of hitting a specific one is nothing. 

> [!summary] Proposition:
> For any two numbers $a$ and $b$ with $a \leq b$,
> $P(a \leq X \leq b) = F(b) - F(a-)$ 
> 
> where "$a-$" represents the largest possible $X$ value that is strictly less than $a$. 
> 
> In particular, if the only possible values are integers and if $a$ and $b$ are integers, then $P(a \leq X \leq b) = P(X = a \text{ or } a + 1 \text{ or ... or } b) = F(b) - F(a - 1)$
> 
> Taking $a = b$ yields $P(X = a) = F(a) - F(a - 1)$ in this case.

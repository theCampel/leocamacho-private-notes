# Homogeneous Equations

***Homogeneous Equations*** are SLE’s where the variables all come in the $a_1x_1, a_2x_2, … , a_nx_n = 0$ form (all the variables are $x_n$). 

For above, all $x$’s could equal 0. That is the ***trivial solution***. We’re looking for the ***non-trivial*** solution. 

<aside>
ℹ️ If a homogeneous equation has more variables than equations, it has infinitely many non-trivial solutions. (Thereom 1.3.1)

</aside>

***Linear Combinations:***

Simple Row operations on columns are simple:

![Screenshot 2022-09-26 at 10.42.13 a.m..png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/85678682-e925-4af2-8c61-ebf611729a55/Screenshot_2022-09-26_at_10.42.13_a.m..png)

![Screenshot 2022-09-26 at 10.42.34 a.m..png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a8e825e0-4765-456b-9888-1936a8e1128c/Screenshot_2022-09-26_at_10.42.34_a.m..png)

The $2x + 5y$ is a ***linear combination*** of $x$ and $y$. Formally, when *multiples of* columns are summed together. Looks like: $sx+ty$

Know: 

Any linear combinations of solutions to a SLE is again a solution. Shown:

Taking $x= \begin{bmatrix} x_1\\ x_2\\ \vdots \\ x_n \end{bmatrix}$and $y= \begin{bmatrix} y_1\\ y_2\\ \vdots \\ y_n \end{bmatrix}$*as solutions*, then $sx +ty= \begin{bmatrix} sx_1+ty_1\\ sx_2+ty_2\\ \vdots \\ sx_n+ty_n \end{bmatrix}$are also solutions.

The following thereom is really overly complicated for a really simple concept. 

ℹ️ Let $A$ be an $m \times n$ matrix of rank $r$, and consider the homogeneous system with $n$ variables with A as the coeffecient matrix. Then:

1. The system has exactly $n - r$ basic solutions (1 solution for every parameter). 
2. Every solution is a linear combination of these basic solutions. 


What does that mean? Simply in non math-convoluted crap;

When you boil a homo matrix down, every variable has a solution. Any other solution you get is actually just a permutation of those basic solutions.
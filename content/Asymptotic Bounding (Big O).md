
> [!tldr] TLDR:
> Get the [[Time Complexity]] by suppressing constant factors (too system dependent) and lower order terms and constants (irrelevant for larger inputs / as approaches $\infty$). The big five are *Big O, Little o, Big Omega, Little omega, Big Theta*.

There's 5 different bounds we can measure against to get an idea for how much time an [[Algorithms|algorithm]] will take:

> [!info] What is $n_0$?
> The point at which the asymptotic bounding of a function becomes true. 

> [!note] Also:
> You can also say $g(n)$ is $f(n)_{best}$. That is refer to specific worst/best case scenario of a different algorithm. 


### 1. **Big O Notation (Upper Bound)**:
- **Notation:** $O(f(n))$
- **Definition:** $f(n)=O(g(n))$ if there exist positive constants $c$ and $n_0$​ such that $0≤f(n)≤c⋅g(n)$ for all $n>n_0$​.
- **Textbook Defintion**: $∃C>0,∃N,∀n≥N:f(n)≤Cg(n)$
- **Intuition:** Big O notation gives an upper bound on the growth rate of an algorithm, describing the worst-case scenario.
- **Simply:** $f(n)$ grows no faster than $g(n)$
- **Example:** $f(n)=2n^2+3n+1=O(n^2)$

### 2. **Big Omega Notation (Lower Bound)**:
- **Notation:** $Ω(f(n))$
- **Definition:** $f(n)=Ω(g(n))$ if there exist positive constants $c$ and $n_0$​ such that $0≤c⋅g(n)≤f(n)$ for all $n>n_0$. 
- **Textbook Definition**: $∃C>0,∃N,∀n≥N:f(n)≥Cg(n)$
- **Intuition:** Big Omega notation gives a lower bound on the growth rate of an algorithm, describing the best-case scenario.
- **Simply**: $f(n)$ grows no slower than $g(n)$
- **Example**:$f(n)=2n^2+3n+1=\Omega(n^2)$

### 3. **Big Theta Notation (Tight Bound)**:
- **Notation:** $Θ(f(n))$
- **Definition:** $f(n)=Θ(g(n))$ if and only if $f(n)=O(g(n))$ and $f(n)=Ω(g(n))$.
- **Textbook Definition**: $∃C_1​>0,∃C_2​>0,∃N,∀n≥N:C_1g(n)≤f(n)≤C_2​g(n)$
- **Intuition:** Big Theta notation gives both an upper and lower bound on the growth rate of an algorithm, describing the average-case scenario.
- **Example**: $f(n)=2n^2+3n+1=\Theta(n^2)$
- **Fun Fact**: It's commutable

### 4. **Little o Notation (Upper Bound, but not Tight)**:
- **Notation:** $o(f(n))$
- **Definition:** $f(n)=o(g(n))$ if for every constant $c>0$, there exists a constant $n_0$​ such that $0≤f(n)<c⋅g(n)$ for all $n>n_0$.
- **Textbook Definition**: $∀C>0,∃N,∀n≥N:f(n)<Cg(n)$
- **Intuition:** Little o notation gives an upper bound like Big O, but it is not tight. It indicates that $f(n)$ grows strictly slower than $g(n)$.
- **Example**: $f(n)=n=o(n^2)$ (I.E. $n^2$ grows faster than $n$)

### 5. **Little omega Notation (Lower Bound, but not Tight)**:
- **Notation:** $ω(f(n))$
- **Definition:** $f(n)=ω(g(n))$ if for every constant $c>0$, there exists a constant $n_0$​ such that $0≤c⋅g(n)<f(n)$ for all $n>n_0$.
- **Textbook Definition**: $∀C>0,∃N,∀n≥N:f(n)>Cg(n)$
- **Intuition:** Little omega notation gives a lower bound like Big Omega, but it is not tight. It indicates that $f(n)$ grows strictly faster than $g(n)$.
- **Example**: $f(n)=n^2=\omega(n)$ (I.E. $n^2$ grows slower than $n$)


> [!check] Difference between Big and little?
> The Big $O$, $\Omega$, $\Theta$ all give you exact time limit of a function. They're *hard* bounded (E.G. $<=n$). They're the "at most / at least". 
> 
> **Whereas** the Little $o$, $\omega$ are the equivalent of saying "Strictly Less/Greater Than". (E.G. $<n$)


> [!danger] Weird Quirk:
> Say an algorithm's Big O is $n$ (the amount of time it will take is $<= n$). It would also be true to say that it has a time complexity of $n^2$ and $n^3$. It's less informative and we tend to only be interested in the most *tightest* bound for an algorithm we can get. 
### Properties:
##### Transitivity:
If upper bound of f(n) is g(n) and upper bound of g(n) is h(n), then upper limit of f(n) is h(n). It's the same (but opposite) for lower bound. 

##### Summation of Bounds:
If you sum 2 functions with the same bound, you get back the same bound. 

### Examples:
![[Screenshot 2023-09-29 at 3.14.10 p.m..png|500]]
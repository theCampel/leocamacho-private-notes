### What exactly?
Are there limits to what [[Algorithms]], regardless of how clever, can actually ever achieve?

### How we'll approach this problem

###### Register Machines:
First, we're going to use Register Machines. Imagine we have registers $\{A, B\}$. You feed into the top left. If B is $0$, you exit the function. Else, you add $1$ to $A$ and take away $1$ from $B$. This loop repeats until $B$ is $0$. This is effectively adding $B$ to $A$. Those are all the rules you need to make any computer ever. 

![[Screenshot 2024-04-12 at 7.27.59 p.m..png|150]]

### Definitions:
A function (e.g. addition or multiplication) is **RM-Computable** *if and only if* there's a *register machine* that computes $f$. (Which turns out to be a lot of things)

### Church-Turing Thesis:
Turns out that the CT Thesis claims that things that are RM-Computable are exactly the functions computable by an algorithm. 

### [[The Decision Problem]]
The final question proposed by Turing to solve the answer of computability.
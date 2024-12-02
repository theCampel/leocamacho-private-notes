t### What is it? 
We use mathematical notation to calculate the *amount of time* an [[Algorithms|algorithm]] will take, *relative* on to input size we give it. Commonly considered with [[Sorting Algorithms]] as well. 

### How does it work?
A key idea is [[Asymptotic Bounding (Big O)]]. This is the idea of Big O notation that you're used to. Relative to the input space, what's the bound that function will hit?

### Different Possible [[Different Time Complexity Running Times|Running Times]]
See [[Different Time Complexity Running Times|here]] for more running times. 

![[time-complexity-examples.png|300]]



> [!danger] Key Insight
> Logarithms grow more slowly than polynomials and polynomials grow more slowly than exponentials. (Polynomials are any $n^k$, exponential is $k^n$). 

### Drawbacks of NOT using this?:
- What if you have different lists of the same length?
- What if you're using slightly different optimised algorithms?
- What if you're using different / slower / faster computers?

### Time Complexities of Basic Operations:
Find a list of [[Time Complexities of Basic Operations]]

### What? Duh. 
A type of [[Data Structures]] where you have a collection of items. Depending on the programming language, be it [[Python]] or [[Java]], you could have different implementations of these in memory.

### Typical Desirables in All Implementations:
Depending on the type of implementation you choose, they will always take different [[Time Complexity]]. 
- .get
- .append
- .insert

### Fixed Length Arrays:
So, [[Fixed Length Arrays]] are typically of fixed length $m$. The time complexities can be as follows:
- `.get(i)` -> $\Theta(1)$
	- Also true for `.set() .append() .length()`
- `.insert(i)` -> $\Theta(n)$. 
	- Why? Because the arrays are fixed length, you have to copy a brand new one with the updated integer. 
	- Also true for `.cons() .delete()`
##### Advantages of FLA:
- Rapid `.get()` and `.set()` -> Especially if this is on the [[Stack vs Heap|Stack]].  
- Fixed, predictable size
##### Disadvantages:
- Doesn't cope well for `len(list)` > $m$. 
- Also, if $n$ is variable, then it will over- or under-cater ([[Data Overflow]]). 

### Extensible Arrays:
It's similar to a Fixed Length Array but different in a key way. If array $A$ overflows, you replace it with a bigger one! If, in [[(Computer) Memory Conceptually]], there's space directly after where $A$ was, you can just continue on. This is free and cheap. 

But what if there's no space after $A$? You have to make a fresh array B and then perform what you wanted to on it. 
##### Time Complexity of Extensible Arrays:
Ok. So most times you can just continue on in memory ($\Theta(1)$). But what about the times you have to copy a brand new array into somewhere new in memory? $\Theta(n)$. This seems like a dirty implementation, but the cost of a bad time complexity is spread out (read [[Amortised Cost|amortised]]) over all the good ones. 

### [[Linked Lists]]:
Read more in the page


![[Screenshot 2023-10-14 at 11.08.44 a.m..png]]
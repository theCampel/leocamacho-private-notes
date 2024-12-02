For an idea of the most common ones:
![[time-complexity-examples 1.png|200]]

### Linear: 
Like a single iteration over list $n$. 

### O(nLog(n))
Incredibly common. It's the [[Time Complexity]] of any algorithm that takes any input, splits it in 2 pieces and solves each piece recursively. EG [[Merge Sort]]. Another reason it's so common is because it's the time complexity of any algorithm who's most expensive step is the sorting of the input. 

### O(Log(n))
This happens when algorithm is doing a constant amount of work to throw away a constant fraction of the input. EG Famously [[Binary Search Algorithm]]. 
### What?
A type of [[Sorting Algorithms]]. When you hear it, think ***Pivot***. Criteria of a pivot:
- All items to the left are smaller 
- Items to the right are bigger

### How does it work?
1. Choose a ***Pivot*** and move it to the end
2. Set `Pointer Red` ($p_r$) and `Pointer b` ($p_b$) to the first element in the given array.
3. If $p_r$ $\le$ ***Pivot***: Swap items pointed to by both $p_r$ and $p_b$.
	- If so, increment $p_b$
4. Increment $p_r$.
5. Stop when $p_r$ is sent out of bounds. 
6. Recursively repeat this for each sides of the pivot. 

### [[Loop Invariant]] For QuickSort:
- Everything $\lt \ p_b$ is $\le$ ***Pivot***
- Everything $\ge p_{b}$ and $\lt p_r$ is $\gt$ ***Pivot***
 
### How do we choose the Pivot?
##### *Popular Option*: Meeting of Three:
Sort the first, middle and last indexes. Choose the middle as the pivot. This makes the assumption that the middle of these items is the median of the array. 

### Time Complexity:
- ***Worst Case***: $O(n^2)$
- ***Average Case***: $O(n\lg n)$


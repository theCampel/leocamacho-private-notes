> [!warning] Careful!
** This page refers to the [[Balanced Search Trees|tree-like]] [[Data Structures|data structure]], not the part in memory as referred to by the page [[Stack vs Heap|Heap]].
\
### What do they look like?
They're generally quite similar to [[Balanced Search Trees|tree data structures]]. You index / build them out from left to right. They look like below (includes Max Heap and Min Heap):
![[Screenshot 2023-10-31 at 1.01.25 p.m..png|380]] ![[Screenshot 2023-10-31 at 1.02.03 p.m..png|300]]

### Representing as an Array:
Like in the blue image above, they're easily represented as an array. The neat thing? If you have the index $i$ of a value in the array, you can get its children or parent indices by the below:
- *Left Child* is at: $2 \cdot i+1$
- *Right Child* is at: $2\cdot i+2$
- *Parent* is at: $(i-1)//2$ (floor division)
- *Leaves* are: $A[\lfloor \frac{n}{2}\rfloor + 1: n]$


### Properties of them (Max specifically):
- ***Parent $\ge$ either of its children nodes***.
- ***The largest element is always at the root***.
- ***Complete binary Tree***: Every layer (except possible the last) is completely filled with children. 
- ***Height of a node***: The number of edges on the from there to the leaf. EG $h(T)=h(0)$ (the root of tree on left) is 2. 

### What's the point?
Enables [[HeapSort]]
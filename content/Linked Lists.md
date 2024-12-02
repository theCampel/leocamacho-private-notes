### What are they?
They are [[Data Structures]] - [[Lists]] specifically - where objects are arranged in Linear Order. A linked list comes in *nodes*. These are tuples of data. The first bit is the value and the second is where the next bit of data is stored in [[(Computer) Memory Conceptually]] (I.E. it's address.)

### Doubly Linked List:
Same idea, but it refers to the next address, the current value and the previous address.
![[Screenshot 2023-10-13 at 8.12.08 p.m..png|500]]

### Time Complexity:
- `.get()` and `.set()` Because you have to iterate over each item individually to find a given item, time complexity is $\Theta(n)$
- `.cons()` -> $\Theta(1)$ *always*
- `.insert(i, x)` and `.delete(i)` have $\Theta(n)$ worst case. But if you already know the address of `i-1`, then it would be $\Theta(1)$.

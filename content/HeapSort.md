Related to working with the [[Heap (Data Structure)]]. It's an `in-place` algorithm (no auxiliary array). Does not maintain the order between relative keys (not stable sorting). 

### Steps to Run:
1. Preprocess the array so it can be represented as a heap.
2. Extract the root and swap it with the last element in the array. 
3. Seen as the heap requirements may be violated, *heapify* the array again (make it back into a heap). (Steps 2 and 3 are $O(\lg(n))$)
4. Repeat the process for all bar the last element in the array.
5. Repeat until sorted.

### Heapify (I.E. Taking step 3)?
I'll admit, the idea of *Heapifying* was incredibly handwave-y. Recall the [[Heap (Data Structure)|heap properties]]. If one of them gets violated, perform the following:
0. Given a tree with a single violation, perform the rest. (I.E. The 2 subtrees you use for comparison should be heaps). 
1. Look at the node you want to heapify. Compare it with its children.
2. Find the largest. 
3. If parent node is not the largest, swap with the largest child. 
4. If a swap was made, recursively heapify the affected subtree, as some heap conditions may have been violated.
 
### Running Time of Heapify:
Think for a second. If all operations in heapifying are constant bar the actual recursive step, the only thing that will determine the time complexity is how many iterations you call. This is going to be the height of the node at which you called it. If you have a n items, it will be $\lg(n)$. 

$\therefore O(\lg(n))$ 
![[Screenshot 2023-10-31 at 4.37.46 p.m..png|400]]

### But Heapifying the Entire Array?
Heapifying only works when your two sub-trees are both heaps. The only place we can absolutely guarantee that? The parents of leaves (Defined [[Balanced Search Trees|trees]] - the most bottom layer). We can use that to upwardly jump and heapify as we go. Time complexity is $O(n)$
 
1. Call Heapify on the parents of leaves, in order or strictly decreasing from the first leaf. (I.E. The parent of the last leaf)

Look up an animation for this. 

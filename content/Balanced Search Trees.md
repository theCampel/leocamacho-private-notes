### Fundamental Idea:
These are another type of [[Data Structures]]. All operations have an average and worst case *[[Time Complexity]]* of $\Theta(lg(n))$. 

BSTs must maintain specific properties in order to keep them efficient. If they break a property, they must be rebalanced - Rotated. 

![[Screenshot 2023-10-30 at 9.38.04 a.m..png|400]]

## What Are Rotations?
This is altering the structure of the tree by rearranging subtrees, with the goal of decreasing the height of the tree. Crucially, rotations don't affect the order of elements. 

### Right Rotations:
```java
    y                x
   / \              / \
  x   C    ==>     A   y
 / \                  / \
A   B                B   C
```
1. You take the node you want to perform a rotation on (E.G. *y*)
2. You *swing* it down to the right and takes the place of what was there (*B* in this case). 
3. Whatever was there (*B*) now gets thrown onto the left of the node that got swung down (*y*)

### Left Rotations:
Literally the same, just the opposite. 
```java
    x                y
   / \              / \
  A   y     ==>    x   C
     / \          / \
    B   C        A   B
```
### Left - Right Rotation:
```java
    z                      z                      y
   / \                    / \                    / \
  x   D                  y   D                  /   \
 / \          ==>       / \          ==>       x     z
A   y                  x   C                  / \   / \
   / \                / \                    A   B C   D
  B   C              A   B
```
### Right Left - Rotation:
```java
    x                      x                      y
   / \                    / \                    / \
  A   z                  A   y                  /   \
     / \      ==>           / \      ==>       x     z
    y   D                  B   z              / \   / \
   / \                        / \            A   B C   D
  B   C                      C   D
```
## Red-Black Search Tree:
![[Screenshot 2023-10-29 at 4.57.44 p.m..png|500]]
##### Criteria:
- A specific type of BST. 
- Node is either red or black
- The *root* (top/base) and *leaves* (the very last nodes at bottom - NIL) are black.
- If a node is red, then its children are black
- All paths from a node to it's NIL descendants contain the same amount of black nodes. 
	- This is also known as the *"Black-height of the red-black tree"*. 
	- You don't count the starting node. 
- The path to the farthest NIL is *never more than twice* the length to the shortest NIL.

#### Strategy for Insertion in RB Tree:
1. Insert desired node and colour it red
2. Recolour and rotate the rest of the nodes to adjust for any potential violations
![[Screenshot 2023-10-30 at 10.14.36 a.m..png]]
  
### What are they:
This is another [[Data Structures|Abstract Data Structure]], where elements are stored in such a way that elements with 
higher priority are *"served"* before other elements with lower priority. What does this mean?

### Example
Imagine having a bunch of elements you want to store. Attach a priority group to each item. Then store them in a way such that their priority is respected (I.E. If storing by [[Linked Lists]], each element could be held sequentially by priority). 

In the below example, each element (denoted $A,B,C,\dots$) is stored with a $\text{key}(v)$ (denoted $1,2,3,\dots$) as their *priority group*. 

![[Screenshot 2023-11-01 at 2.44.07 p.m..png]]

### Operations:
- ***ExtractMax($Q$)***: Finds element with max priority in the priority queue, returns it and deletes it from the queue. 
- ***ChangeKey($Q,v,a$)***: Changes the key:value of element $v$ to $\text{key}(v) = a$ 
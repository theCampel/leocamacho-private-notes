---
quickshare-date: 2024-05-07 13:41:14
quickshare-url: "https://noteshare.space/note/clvwdq87d1509601mwb7do84n2#Qb6ck4FcU47v0RrDC2YmO8SfK5O11KsrlIazAfndPT8"
---
> [!warning] Careful!
> This page refers to the part in [[(Computer) Memory Conceptually]], nothing to do with the Stack or Heap [[Data Structures|data structure]]. 

### What're they all about?
The [[(Computer) Memory Conceptually]] can (generally) be split into 2 distinct points. The diagram below is a good visualisation.
![[Screenshot 2023-10-13 at 6.49.20 p.m..png]]

### What's the Stack?
The stack is a section of [[DRAM]]. In it, you can find a few things. Notable stuff includes:
- **System variables:** Smaller, primitive data types are typically stored directly on the stack. This can include *int*, *char*, *bool*, or *float*. Other, (i.e. more complex data types), have their addresses in the heap stored in the stack. (The lowercase letters stored in the stack). 

Items in the stack are *contiguous* (they all touch each other sequentially), so they have to be of fixed length. 

It is always ***Last In First Out***

### What's the Heap?
In this part of RAM, what would you find?:
- *Dynamically Allocated Data*
- *Larger, non dynamically allocated stuff*: This is to avoid large stuff getting thrown into the stack and causing a stack overflow.
- In Python, because pretty much everything is mutable, pretty much everything lives here. 

##### Features of the Heap:
- They're typically much larger than the stack. But once you run out of space here, you're out of memory. 
- Items in the heap can be of any size, shape or contain references to other data within the heap. 
- Imagine changing data addresses within the Heap. Some data can become unreachable, as is seen in the diagram (imagine popping off the last few items within an array). Normally, in good languages ([[Python]]), the [[Garbage Collector]] detects it and reclaims the space once occupied. 
- 




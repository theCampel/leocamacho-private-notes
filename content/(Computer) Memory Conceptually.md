### Specifically, what kind of memory?
This page relates to everything conceptually of how we store in physical registers, how we do it and what exactly is stored there. Click here for more about [[DRAM]]. Or click here to find out more about the [[Stack vs Heap]] (I.E. how the data is separated on the RAM level). 

### What Exactly is Memory?
How do you store data in computers? First, the meaning of memory is really context dependent. It could genuinely mean a lot of things. Can refer to the slower memory (hard drives, SSDs etc.). It could also refer to [[Registers]]. 

### Goals and Types of Memory
- Large
- Fast
- Randomly Accessible
Since this is not possible for a single piece of memory, we have a [[Memory Hierarchy]]. We combine different kinds to give the illusion of that. There's different types of memory:
- [[SRAM]]
- [[DRAM]]
- [[Cache]]
- [[Flash SSD]]
- [[Hard Disk]]


### Conceptually Actually Storing Data
Ok. How do you store data in computers? For now, let's address this problem as storing in a *"memory system"*. (For illustrative purposes we'll talk about a 32-bit system.)

Few things to understand first. A ***word*** is a 32-bit (4 byte) long [[Binary|binary]] data. When we store data, we store it in chunks (words) because it makes accessing, addressing and using just so much easier. (And a ***byte*** is *8 bits* long)

The following is an example of **aligned*** memory. Now how do we where specific things are? We give them addresses. The best way to arrange these addresses? Multiples of 4. Why? Each word is 4 bytes. How do we know when one stops and the other begins? Just jump ahead in multiples of 4. . So whenever you say "get me the data stored in byte 4", you're actually getting the next word (32 bits) that starts at the 16th bit. 
![[Screenshot 2023-10-05 at 1.31.57 p.m..png|150]]

### What if you have data larger than a word? (I.E an array?)
The A\[n] words are just entries to an Array. 



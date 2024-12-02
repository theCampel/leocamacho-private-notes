A conceptual mix between [[Fully Associative Cache]] (just throwing into cache when and where you see fit) and [[Direct-Mapped Cache]] (having specific places within cache for corresponding bits of the memory). This combines both of their benefits. 

![[Screenshot 2023-11-16 at 6.46.19 p.m..png]]

### How it works:
1. Your cache memory is split into ***sets*** (a collection of data blocks). 
2. Similar to DMC, you determine which set (instead of block as in DMC) bit of Main Memory belongs to based on the makeup of the address. (Bottom left as an example)
3. Once you find the set, you can throw it in as you would for FAC. 

### Quirks:
- The hardware is as more expensive than just basic DMC. 
- It's got more flexibility
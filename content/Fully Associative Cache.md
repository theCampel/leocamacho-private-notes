### Diagram:
![[Screenshot 2023-11-16 at 12.20.55 p.m..png|500]]

> [!note] Key Idea: Tag
> Right. Blocks can be placed *anywhere* in the cache, making it really hard to find specific addresses in data. We tackle this problem by giving each *data block* a **tag**, an *index-like* key assigned to each block. If you store a group of words all of address `0x3f6XX`, where `X` is the identifier for exact pieces of memory, then the tag would be `03f6`. You can also think of *X* as the *offset* for the tag, in the same way to get *123* (in ordinary decimal counting), *23* is the offset from *100*.

### Details:
- Block can be placed *anywhere* in cache - Flexible
- Correct Cache blocks are identified by matching tags
	- The top bit is literally just an address
- The offset matches to a specific group within the byte offset
- ***Slight Problem***: Because data could be anywhere, you have to iterate over each
 tag in order to find the correct block - Slow. 

### Quirks of FAC:
- Blocks can go into any location
- Highly flexible -> Lowest miss rate
- Must search whole cache to find block -> Speed and power suffer



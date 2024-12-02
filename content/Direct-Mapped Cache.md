A type of [[Cache]]: Unlike [[Fully Associative Cache]], where finding tags is slow, blocks here are determined to be in a specific location, determined by its address. Dats has a specific place in memory, as determined by the data's (main memory) address. This is done with the use of indices. 


![[Screenshot 2023-11-16 at 12.55.17 p.m..png|400]]

### Indexing with DMC:
1. Take a random 32 bit address. 
2. The Byte Offset depends on how many addresses there are *within* each data block. 
3. The index refers to which location of cache each data block is.
	1. *To find amount of possible indices*: If you have $x$kB of cache space, and $y$ Byte data blocks, then it's $\frac{x}{y}$
	2. *To find amount of bits needed to represent*: $\frac{x}{y} = 2^i$ -> $i$ is the desired amount of bits to represent it.


### Slight Problems with DMC:
- Simple hardware -> Fast and lower power
- Blocks map to same locations -> Increased miss rates
> [!danger] Note!
> This note was originally written for cache in a computer. But the concept is a popular one in CS. For example, this is incredibly common for [[Distributed System Architecture]], for Server Caching, Database Caching etc.
### What?
- Small, fast [[(Computer) Memory Conceptually|memory]], very close to [[CPU - Processor Components|processor]]. Takes heavy advantage of [[Memory Hierarchy]]. 
### Terms:
- ***Block*** (or ***line***): Typically a collection of words (aka group of contiguous memory locations), corresponding to blocks of main memory. 
- ***Hit***: Data is found (good thing)
- ***Miss***: Data not found
	- Continue search at next level of memory
	- After data is eventually found, it's copied to the memory level where the miss happened (optimise *temporal locality*). 
- ***Hit Rate/Ratio***: Fraction of accesses that are hits at a given level.
- ***Miss Rate***:  `1 - Hit Rate`
- ***Allocation***: Placement of a new block into cache, typically resulting in the eviction of another. 
- ***Eviction***: Displacement of a block from the cache. 
- Index

### Cache Replacement Algorithm:
- Least Recently Used
- First In First Out
### Writing to Cache:
##### On a hit:
- ***Writing Through***: When you write it to cache, also write it to memory.
	- Always synchronised but writes are slow and require memory bandwidth
- ***Write Back***: Write to cache only
	- Only when the block of cache is evicted do we store it / change the main memory. 
	- Writes are thus fast but main memory has stale cache for a while.  
##### On a miss:
- ***Write Allocate***: Bring the block into cache and write to it 
- ***Write No-Allocate***: Do not bring the block into cache, simply modify the data in memory only.
	- Quicker if there's no locality

### Different Types of Cache:
- [[Fully Associative Cache]]
- [[Direct-Mapped Cache]]
- [[Set Associative Cache]]



### Cache Comparisons: ![[Screenshot 2023-11-24 at 11.04.12 a.m..png]]
Another key part in the space of [[(Computer) Memory Conceptually]]. 
### Basically: 

##### Background:
Alright. In a 32 bit machine, we could have potentially $2^{32}-1$ memory addresses. But what if you only have $1GB$ of [[DRAM]]? What if I want to have a bunch of programs open as well, more so than I would be able to with the measly $1GB$ of RAM? 
##### Solution:
We solve this by sandboxing each program, and allocating it a spot in our [[Address Space|Virtual Address Space]]. We then map each program onto a place in actual physical real memory. Virtual Memory is divided into blocks of data called [[Pages (Virtual Memory)]]. Each program thinks it's at the beginning of physical memory. Also, to map the virtual memory to physical memory, we use a [[Page Table]]. Every program ***thinks*** it has its own PT. 
###### Example:
If we keep swapping between Safari, Obsidian and VSCode, but left Adobe PDF reader on the background, Adobe would likely get swapped to the hard-disk, while the other 3 are left in RAM. If we want to use it, we'd simply swap it in and maybe move Safari to the main disk (if there's no space left in Physical memory). This is the exact reason computers with more RAM feel faster when switching between programs, because they don't have to load it up from hard disk as they're *all* stored in physical memory. 

 
![[Screenshot 2023-11-24 at 11.53.15 a.m..png|400]]


![[Screenshot 2023-11-24 at 5.32.58 p.m..png|600]]



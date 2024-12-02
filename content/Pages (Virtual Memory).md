### What?
In the same way [[Cache]] is split into Cache Lines, [[Virtual Memory]] is split into ***Pages***. I.E. fixes sized blocks of memory.  
- Frames in Physical memory == Pages in VM. 
### Normally:
- Typical Page sizes are $4$-$16KB$ ($MB$ or $GB$ in Servers) ($2^{12}$ - $2^{14}$).
 - The virtual address comprises of the virtual page number and the byte within. 
- The physical address address is the physical page and offset. The offset is the same as the VA's.  
- The [[MMU]] maps virtual pages to physical pages, mapping using a [[Page Table]] 
- Physical memory has a space reserved by the OS called [[Swap Space]].
![[Screenshot 2023-11-24 at 5.55.52 p.m..png|150]]





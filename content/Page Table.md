### Simply:
A table ([[Data Structures]]) that maps [[Virtual Memory|virtual addresses]] to [[(Computer) Memory Conceptually|physical addresses]]. Each *running* program has its own page table. That's how the OS maintains the illusion each process has its own contiguous block of virtual memory. 

The table has a bunch of entries (Page Table Entries - PTE's, which varies on length based on implementation). Each entry is made up of *status bits* (Resident and dirty for eg) and the Physical Page Number. This PPN is the physical address (not including the offset). 
### Translating Virtual Addresses to Physical Addresses:
Take a *32 bit* address, with $1KB$ large pages. You need 10 bits to represent which byte within the page you're referring to. Thus, you have 22 bits left for representing the amount of pages you have within your page table. 

### Resident and Dirty Bit:
Each PTE (Page Table Entry) has a *Resident Bit*. $R=1$ for pages stored in RAM, and 0 for otherwise. There's a *page fault exception* when $R=0$ -> *I.E The virtual address you seek is not in RAM, it's on disk*.

There's also a *Dirty Bit*. $D=1$ if we've changed this page since loading from disk (and therefore need to write it to disk when it's replaced). Think dirty [[Cache]]. 

### Translation Lookaside Buffer (TLB):
Imagine having to, for every single instruction, translate *every single address*. This would be *extremely slow*. Cue the [[Translation Lookaside Buffer (TLB)]]

### Calculating Page Table:

## Setup:
- `Pagefile.sys`: The file that acts as an extension to [[(Computer) Memory Conceptually|physical memory]]. 
- `hiberfil.sys`: Stores [[Virtual Memory|contents of RAM]] when system is in hibernation mode.
- `swapfile.sys`: The [[Swap Space]]. In other words, stores data from non active processes to optimise system performance. 

## The Attack? (Overly specific isn't it):
1. Boot off the computer. Info is thus stored in memory temporarily
2. Boot with a different OS using a CD.
3. Retrieve the files mentioned, as they likely have sensitive info.

## Mitigation:
[[Encryption|Encrypt]] your [[Hard Disk]] buddy. 
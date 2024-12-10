> [!warning] What:
> It would be incredibly dangerous to allow users to willy-nilly handle memory. Thus, the [[CPU - Processor Components|CPU]] is split into 2 modes: ***Kernel*** and ***User***, trusted and untrusted respectively. The [[Operating System (OS)]] is in charge of splitting between the two. 

## Modes:
- ***Kernel:*** A software layer directly on top of the hardware that *controls / restricts* the secure sharing of low-level resources between users/applications.
- ***Execution Modes:*** 
	- *User Mode:* Can't actually directly call resources, so install invokes `syscall`, which temporarily switches to kernel mode. 
	- *Kernel Mode:* Direct access to computer resources
		- ***Privileged*** instructions (accessing I/O devices, handling page table, etc) only executable in *Kernel* mode.
		- Only *enterable* through `syscalls` (eg `read()` in [[C (Programming Language)|C]], [[Operating System (OS)|OS]]). 
		- `eret` instruction sets mode back to previous mode. 

### Advantages:
- Ensures programs don't interfere with each other - only have access to the the resources for which they have permission

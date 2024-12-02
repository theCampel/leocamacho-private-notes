
> [!warning] Architecture$^2$
> Wait! This page refers to ***OS architecture***, which focuses on designing an environment for applications to run, abstracted away from hardware details. It's different from [[ISA (Architecture)]], which defines how software at the lowest level (eg [[(MIPS) Assembly Language|assembly]]) operates. 
## What?
There's some key identifiers:
- ***Kernel:*** A software layer directly on top of the hardware that *controls / restricts* the secure sharing of low-level resources between users/applications.
- ***Execution Modes:*** 
	- *User Mode:* Can't actually directly call resources, so install invokes `syscall`, which temporarily switches to kernel mode. 
	- *Kernel Mode:* Direct access to computer resources.
- It runs [[Processes]]

> [!attention] What?
> There's many times that exceptional events interrupt normal program flow (E.G. In [[(MIPS) Assembly Language|MIPS]]). if they're internal (called by program execution - E.G. `syscall`, [[Page Table|TLB Miss]]), they're known as *traps*. Otherwise, they're *interrupts* (E.G. Network packet arrives, [[IO|I/O]] keyboard click). 

### The Exception Mechanism:
##### 1. Save Address of *Current Instruction*.
- Typically into an *Exception Program Counter* (EPC)
##### 2. *Transfer Control to the OS* at a known address
- Approach 1 (Doesn't work for external interrupts):
	- Jump to a predefined (OS) address
	- Use the Cause Register to then branch to the right handler
	- This method is simply like calling a function
	- Works well for `syscall` as Cause register is explicitly set.
- Approach 2 (*Vectored Interrupt*):
	- A bunch of little, physical, wires that corresponds to a specific exception.  
##### 3. Handle Exception
- All registers must be preserved, similar to a procedure call
##### 4. Return to User Program Execution:
- Handler restores user program's registers and jumps back using EPC
- Relies on special instruction `eret` (*"exception return"*)









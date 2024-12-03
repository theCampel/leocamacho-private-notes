> [!note] Umm.. Actually ☝️
> The **x86** architecture and [[(MIPS) Assembly Language|MIPS]] share a lot of common ideas. The ***% registers*** we talk about below are just different flavours of the ***$ registers*** from MIPS.

## Components
- Like MIPS, you have program [[Registers|registers]]: 
	- `%eax` - The main register for holding results of arithmetic
	- `%ebx` - The main register for holding data. 
	- `%esp` - Extended Stack Pointer - Points to the top of the [[The Stack's Use in MIPS|stack]]. 
	- `%ebp` - Extended Base Pointer - Points to the base of the stack frame of the current function call. 

### [[Address Space]] in x86:
*Note: Remember this is [[Virtual Memory]], so the addresses are actually all split up and correspond to different physical addresses. Fucking love OS.* 
![[Pasted image 20241103152144.png|400]]

## Careful!
- You should be incredibly careful when dealing directly with memory. Improper handling can lead to [[Data Overflow]].
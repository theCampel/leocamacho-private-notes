> [!note] Umm.. Actually ☝️
> The **x86** architecture and [[(MIPS) Assembly Language|MIPS]] share a lot of common ideas. The ***% registers*** we talk about below are just different flavours of the ***$ registers*** from MIPS.

## Components
- Like MIPS, you have program [[Registers|registers]]: 
	- `%eax` - The main register for holding results of arithmetic
	- `%ebx` - The main register for holding data. 
	- `%esp` - Extended Stack Pointer - Points to the top of the [[The Stack's Use in MIPS|stack]]. This updates every new operation that's done. 
	- `%ebp` - Extended Base Pointer - Whenever you jump to a new function, this points to the base of that function.

### [[Address Space|Memory Address Space]] in x86:
Let's walk through the provisioning of memory in [[x86]]... Below is a diagram of it, as well as of [[C (Programming Language)|C]] code we're about to run. 

##### Quickly! What's a stack frame!
Every time you run a function, you're actually jumping to a different [[(MIPS) Assembly Language|location]] in memory. But there's stuff you need to remember. For example:
- The parameters you're bringing along with you.
- Where to return to once you're done. (*Return Address*)
- *Stack Base Pointer* - Look at `%ebp` above. 
- etc. 

*Note: Remember this is [[Virtual Memory]], so the addresses are actually all split up and correspond to different physical addresses. Fucking love OS.* 
![[Pasted image 20241211160744.png|600]]
![[Pasted image 20241211161435.png|500]]
#### Step By Step:
1. Firstly, you add the function arguments to memory, in reverse order. 
2. You push the return address (the place to return to once the function is done).
3. Stack Base Pointer `%ebp` - look above.
4. Exception handlers
5. Canary goes here. Cos if your local variables are set to overwrite the base pointer, they'd trip up here first
6. Local Variables



## Careful!
- You should be incredibly careful when dealing directly with memory. Improper handling can lead to [[Data Overflow]]
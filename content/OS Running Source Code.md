> [!note] Important pre-reading
> It's important to read up on [[OS Memory Management (x86)]], [[(MIPS) Assembly Language]] [[The Stack's Use in MIPS]], [[C (Programming Language)]]

## How Does C Code Run?
1. The [[Memory Hierarchy|compiler]] turns C code into [[(MIPS) Assembly Language|assembly]] code. 
2. The [[(MIPS) Assembly Language|assembler]] converts assembly code into machine code.
3. The ***Linker*** takes required libraries and adds it to a single final executable. 
4. The ***loader*** sets up [[address space]] in memory and loads the first instruction into memory. 
5. The [[CPU - Processor Components|CPU]] interprets the instructions, with `%eip` doing the job of the `PC - Program Counter` in MIPS. 


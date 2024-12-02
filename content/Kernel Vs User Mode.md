> [!warning] What:
> Most complex [[CPU - Processor Components|CPU's]] today have 2 modes: *Kernel (OS)* and *User* Modes, trusted and untrusted respectively. 

### Quirks:
- ***Privileged*** instructions (accessing I/O devices, handling page table, etc) only executable in *Kernel* mode.
- Only *enterable* through exceptions.
- `eret` instruction sets mode back to previous mode. 

### Advantages:
- Ensures programs don't interfere with each other - only have access to the the resources for which they have permission

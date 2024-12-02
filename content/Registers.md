### What?
Little dedicated storages for small bits of data (EG For program variables and control state). [[MIPS (Architecture)]] processes operate on registers only. 

Registers are generally sized to contain a machine's word (32/64 bit - 32bit for [[MIPS (Architecture)]]). What's this? The standard size of data that the [[ISA (Architecture)]] is designed to handle efficiently. 

### Layout:
Within a register, data is stored. Each entry of data is typically 32 bits. Thus the *byte* address is typically also given. The fact each entry is stored in bytes (multiples of 8) is called and ***Alignment Restriction***. 

### What happens when variables > registers?
If a program has more variables than chip has registers, the values in the registers get *spilled* into [[(Computer) Memory Conceptually]]. This is less than ideal. 

### Actually what is it in [[Digital Circuits]]:
It's a bunch of [[Combinational and Sequential Logic Blocks|d flip-flops]] strung together using a common clock. 
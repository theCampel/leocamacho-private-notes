
> [!warning] Note:
> This page refers specifically to the architecture that is MIPS. This can include the structure of an instruction. Click here to find out more about [[(MIPS) Assembly Language]]. 
### What is it?
An actual [[ISA (Architecture)]] that's been used in billions of processors since the 80's. 

### Instructions:
![[Screenshot 2023-09-28 at 3.36.25 p.m..png|500]]
![[Screenshot 2023-12-12 at 4.18.27 p.m..png|500]]

- `R-type`: Used for instructions that require *2 input registers* and an *output register* (eg `sub`, `add`, `SLL` etc.)
- `i-type`: Used for instructions with *2 input registers* and a *destination address* (eg `bne`, `blez`, `lb`, `addi`, `andi`).
Since there's only a limited amount of space, we gotta make good use of them. This is what MIPS instructions look like. Sequences of instructions are called Machine Code. 

### Big-Endian:
MIPS is Big-Endian, meaning we read the bits from left to right. Not all [[ISA (Architecture)|ISAs]] are. [[Endianness]] is an important bit of memory.


There's only 4 "Data Transfer" Instructions. 
![[Screenshot 2023-10-05 at 2.05.17 p.m..png|300]]
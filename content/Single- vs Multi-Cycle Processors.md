### The Difference, Simply:
##### Single-Cycle Processors, recapped:
Every instruction in a single-cycle [[CPU - Processor Components|processors]] is intended to run on a single clock cycle. The problem is some instructions run through a lot more [[Logic Gates|gates]] than others. Thus, the cycle speed must be as slow as the slowest instruction (*bad*). They're incredibly (relatively speaking) simple however. 

##### Multi-Cycle Processors on the other hand:
Instructions on this type of processor can take multiple clock cycles.  This way instructions will never take more time than necessary. MCP's only use a single ALU, before there were 2 (one for actual adding and another for updating PC). 

 ![[Screenshot 2023-11-14 at 4.35.04 p.m..png|400]]

### Multi-Cycle Processor - In Depth:
![[Screenshot 2023-11-14 at 4.41.24 p.m..png|600]]

![[Screenshot 2023-11-16 at 11.06.01 a.m..png|600]]

> [!info] Quirk of MCP
> You're reading 2 registers (A and B in diagram) even if you don't need to. `jump` for example only needs a single address. 

### Control Signals:
1 bit binary signals fed into the [[Control Unit]] so it can decide what do do next. 

### Fetch-Decode-Execute Cycle Example:
(The <= means the thing on the left is set to the thing on the right at the end of a clock cycle)
1. Instruction fetch
   `IR < = Mem[PC]`
   `PC < = PC+4`

2. Instruction decode and register read
   `A < = Reg[IR[25:21]]`
   `B < = Reg[IR[20:16]]`
   `ALUOut < = PC+sgnext(IR[15:0]<<2)`

3a. R-type arithmetic/logical instruction
   `ALUOut < = A op B`

3b. Immediate arithmetic, including memory address generation
   `ALUOut < = A + sgnext(IR[15:0])`
3c. Branch completion
   `if (A = = B) PC < = ALUOut`

3d. Jump completion
   `PC < = {PC[31:28],IR[25:0],2’b00}` 

4a. R-type arithmetic-logical instruction completion
`Reg[IR[15:11]] < = ALUOut`

4b. Memory access (load)
`MDR < = Mem[ALUOut]`

4c. Memory access (store) & completion
`Mem[ALUOut] < = B`

5. Load Instruction Completion
`Red[IR[20:16]] < = MDR

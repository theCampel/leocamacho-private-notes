### Main Functions:1
1. Fetch Instruction from instruction Memory
2. Read Register Operands
3. Compute with ALU
4. Access data memory for load / store
5. Store the result of computation or loaded data into destination register
6. Update Program Counter

### Datapath Components :
*Simply*: Handles and manipulates the data as instructed by the program being executed. 
- [[Registers]] -> Store the data being used by CPU. The [[ALU]] can access quickly.
- [[ALU]] -> Performs operations on the data in registers
- [[Multiplexor (Mux)]] -> Decide which data should be sent where
- [[Buses (Circuits)]] -> The highways of data transfers, connecting the CPU to different parts of the computer
- Program Counter -> Seen in [[(MIPS) Assembly Language]].
- Instruction Register
- Data Memory

### Control Path:
- [[Control Unit]] ->
	- Retrieves instructions from [[DRAM]]
	- Decodes the Instruction
	- Does a lot more lol
- [[Circuit Clock]]
- Instruction decoder
- Instruction Decoder
- Status Flags or Condition Codes
- [[Finite State Machine]]

### Diagram:

![[Screenshot 2023-11-14 at 12.12.53 p.m..png|500]]


### Processor Speed:
> [!danger] Important Theorem
> $$\text{Execution Time} = \frac{\text{Instruction Count} \times \text{Cycle Time}}{\text{Clock Frequency}}$$

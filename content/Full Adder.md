### What:
A [[Digital Circuits]] designed to add [[(Computer) Bit]] together. They're designed in such a way so they can be strung together to add a full binary (32bit/64bit) numbers. 

![[Screenshot 2023-11-13 at 4.13.35 p.m..png|250]]![[Screenshot 2023-11-13 at 4.24.51 p.m..png|250]]
### FA Truth Table:

| A (Input 1) | B (Input 2) | Cin (Carry In) | Sum (S) | Carry Out (Cout) |
|-------------|-------------|----------------|---------|------------------|
| 0           | 0           | 0              | 0       | 0                |
| 0           | 1           | 0              | 1       | 0                |
| 1           | 0           | 0              | 1       | 0                |
| 1           | 1           | 0              | 0       | 1                |
| 0           | 0           | 1              | 1       | 0                |
| 0           | 1           | 1              | 0       | 1                |
| 1           | 0           | 1              | 0       | 1                |
| 1           | 1           | 1              | 1       | 1                |

### [[Data Overflow]]:
If the last full adder has a carry-out of *1*, many [[Arithmetic Logic Units|ALU's]] will simply set a flag in a registry saying something has gone wrong. Otherwise, it may just continue on as normal, causing the error to propagate onwards. 


### Full Adder Diagram
![[Screenshot 2023-12-12 at 4.57.43 p.m..png|400]]


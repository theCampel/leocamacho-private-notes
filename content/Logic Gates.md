### What are they?
- ***Simply***: Physical implementations of Boolean Functions.
### Examples:
![[NV_0501_Byers_Large.jpg|500]]

1. **AND Gate**: Outputs true (1) only if all the inputs are true.
2. **OR Gate**: Outputs true if at least one of the inputs is true.
3. **NOT Gate** (also known as an inverter): Outputs the opposite of the input; if the input is true, it outputs false, and vice versa.
4. **NAND Gate**: Outputs the opposite of the AND gate; it outputs true if at least one input is false.
	1. ***Fun fact:*** You can make any other gate by just using a collection of these. 
5. **NOR Gate**: Outputs true only if all inputs are false.
6. **XOR Gate** (Exclusive OR): Outputs true if the inputs are different.
7. **XNOR Gate** (Exclusive NOR): Outputs true if the inputs are the same.
8. **Multi-Input Gate:** You can have both *and* and *or* gates. It would be true if *all* inputs are true or *at least one* is respectively.

### Functionally Complete
It's the idea that anything can be logically created from the most basic barebones. 
*EG*: Any logical function can be made from:
- `{AND, NOT}`
- `{OR, NOT}`
- `{NAND}`
- `{NOR}`


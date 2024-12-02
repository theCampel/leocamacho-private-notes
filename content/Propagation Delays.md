### What?
When referring to [[Digital Circuits]], specifically [[Full Adder]], it's the rippling delays between the input signal and output signal. Obviously, when you combine a bunch of single-bit adders, for example, the delay between a single adder compounds to the full 32 bits. 

### Delay depends on:
1. The Tech (The transistor material, capacitance etc.)
2. The type of gate
3. *Fanning Out*
	- If you're outputting a signal from one gate into many gates, it will obviously take more time than if you were just outputting into a single other gate. 

### A problem:
What if you're working with 2 different circuits that have different amounts and types of gates. They would obviously have different delays. (Example below). 

![[Screenshot 2023-11-14 at 10.18.23 a.m..png|400]]

### Solution:
A [[Circuit Clock]]...

> [!summary] Formal Definition:
> ***Propagation Delay*** is the delay between input signal change and output signal change. 

### Calculate:

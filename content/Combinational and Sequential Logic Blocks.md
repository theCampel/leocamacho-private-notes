### What:
These are the *building blocks* used in [[Digital Circuits]] to implement [[Logic Functions]]. 

### The Different Types:
##### Combinational Logic Blocks:
- ***Simply***: Basic building blocks that don't have any memory and whose output is a pure function of the present input only. Examples:
	- *[[Logic Gates]]*: AND, OR, NOT, NAND, NOR, XOR, XNOR.
	- *[[Encoders-Decoders]]*: Converting data from one format to another.
	- *Comparators*: Comparing values
- **Quirks**:
	- *Instant output*: The output changes immediately when the inputs changed.
	- *Design:* Typically designed with a [[Truth Table]].
	- 

##### Sequential Logic Blocks:
- ***Formal***: The present output depends on the present input *as well* as past input(s).
- ***Simply***: These blocks have memory and their output is a function of the input as well as the history of past inputs, (the state). Lowkey just a Combinational Logic Block but with a memory bit added. Example:
	- ***Flip-Flops***: These store a single piece of data. Like a light switch (more accurately light button), it will remember the previous state and only change when you give it a new '*flip*' command.
	![[Screenshot 2023-11-13 at 5.23.57 p.m..png|500]]

###### But sir, the timing?
Because it's half a combinational logic block, whenever you change the input, the state changes and thus the output could possibly change. This is known as *asynchronous sequential logic*.


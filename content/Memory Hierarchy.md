### Diagram + Example:

![[Screenshot 2023-11-16 at 11.43.14 a.m..png|350]]![[Screenshot 2023-11-16 at 11.44.41 a.m..png|350]]

> [!note] Idea
> The idea of combining small amounts of expensive but fast memory closer to the processor and larger amounts of cheaper but slower memory further from the processor. 

### Why does a hierarchy work so well?
Ask yourself: "Why does using just a tiny bit of really fast memory make the computers incredibly quick?". 2 reasons: *Temporal Locality* and *Spatial Locality*.

- ***Temporal Locality***: If a bit of memory has been accessed recently, it's likely to be used again soon. 
- ***Spacial Locality***: Memory locations close to a recently accessed memory location are likely to be used soon. 

> [!info] Why does this work so well?
> Without even intentionally doing this, we tend to write code that follows these paradigms. For example, think of a loop in [[(MIPS) Assembly Language]]. We have 3 consecutive instructions located consecutively in memory. The PC is at one and increments to get the next one (that's *right next to it*). And when you hit the jump in the loop? You go right back to the first one instruction, the one that's been recently used. Google hire expert coders that maximise locality in their algorithms to make their stuff even faster. ( #interesting)


### Who moves data between levels of hierarchy? Typically:
- *SW (compiler)*: Between registers and main memory (or [[Cache]]).
	- Think of `lw` and `sw`
- *HW*: Between caches and main memory. Typically programmers are not aware of caches.
	- As this goes between RAM <-> VRAM , it's typically done by the hardware and you don't even notice it happen. 
- *SW (Operating System)*: Between main memory and SSD.
	- This the bloke who's gotta 


### Why?
When coding in [[(MIPS) Assembly Language]], you often have nested functions. You also have to record the return address of the so you know where to return to. What does this look like? Imagine Jumping from Main to function A, And-Linking the the return address into `$ra`. But now what if you want to jump from A to B? You can't store A's return address into `$ra` because we need it.

### Solution:
Store the return addresses into memory, in [[Stack Vs Queue|stack fashion]]. As you recursively add return addresses, the LIFO property of the stack helps you return to the correct position. 

> [!note] How do Stacks work in MIPS?:
> Stacks in MIPS are downward descending. They have a pointer which starts at the top. When you want to push (add) a [[(Computer) Memory Conceptually|word]] to the stack, you decrement the counter by a word, and add it to the Stack Pointer's new position.  

### Code Example:
```assembly
# Push (add) something to the stack
addi $sp, $sp, -4 # move sp down
sw $ra, 0($sp) # save ra on top of stack
```

```assembly
# Pop something from the stack. Once you move the counter back up, it doesn't matter if something used to be there. 
lw $ra, 0($sp) # fetch value from stack
addi $sp, $sp, 4 # move sp up
```

### Other Uses of the Stack in MIPS:
- Save variables across calls
- Can be used for local variables within a function

### What's the entire working window called?
When you jump from a function and begin adding stuff to the stack, including variables, parameters etc, we call all of that the Stack Frame. We also typically set the `$fp` (frame pointer) to the base of the Stack Frame so we constantly have a *"fixed"* address for the SF. It's also saved on a function call.
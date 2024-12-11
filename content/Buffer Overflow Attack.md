## What?
Remember, a [[Data Overflow]] overwrites data in memory. How do we actually take advantage of that, and redirect the overflow to the malicious code?

## How?
Before the code, remember that whenever you [[The Stack's Use in MIPS|dive into a function]], you store the return address on the stack (reminder of what [[Address Space]] looks like). What if you could rewrite the return address to be that of something malicious? Or what if the attacker just input the (malicious) machine code as the attackers input? When the [[OS Running Source Code|%eip]] or [[(MIPS) Assembly Language|program counter]] reaches it, it runs. 

Take the below code:
```c

void vulnerable_function(char *input) {
    char buffer[8];
    strcpy(buffer, input);  // No bounds checking here, so buffer overflow is possible
}

int main() {
    char *malicious_input = "AAAAAAAABBBBCCCCDDDD\xef\xbe\xad\xde";  // Includes overflow and the new return address (of something malicious).
    vulnerable_function(malicious_input);
    return 0;
}
```

### The Struggle is Real (I.E. how do we actually get the return address):
It's hard to actually know what location your malicious code is at (and thus what to set the return address to). 
- If we know what the code looks like, we know exactly how big the buffer is (and thus what's *too* big). 
- If we didn't know what the code looks like, we know all [[Address Space|32 bit]] machines are only capable of $2^{32}-1$ addresses. What if we tried every one?
- If we know the rough address (i.e. the approximate size of the stack), we could create a `NOP` (No Operation) sled. This is basically padding before the attack so if the `Return Address` lands on it, it will slide down to the relevant code.

### Some [[C (Programming Language)|C]] Culprits:
None of these do bounds checking. The programmer has to add checks:
- `strcpy` - Copies the line from a variable into something
- `strcat` - Concats 2 lines together.
- `gets` - reads line from somewhere into a variable
- `scanf`

## Defenses:
- ***Stack Canaries:*** a small, *random* value placed (randomly) between local variables and control data (eg return address). If the canary gets altered, the program stops prematurely. 
	- If the attacker learns (or guesses) the value of the canary, they can rewrite the stack but maintain the value of it.
	- If the attacker learns the location, they could jump over it on the stack
	- Doesn't work against heap overflows(?)

- ***Data Execution Protection:*** Makes certain parts of the stack non-executable. Even if the attacker can add malicious code to the stack, they can't run it. 
	- What if the attacker doesn't inject new code, simply refers to other insecure code.

- ***Write XOR Execute:*** The stack will always either be Writable or Executable but never both at the same time. 
	- Again, just reuse old unsafe C code. 

- ***Address Space Location Randomisation (ASLR):*** Prevent the attacker from knowing where things are in memory. Place standard library things (eg `exec()` etc.) in random locations. 
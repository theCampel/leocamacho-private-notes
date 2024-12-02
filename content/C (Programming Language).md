---
quickshare-date: 2023-12-08 15:39:48
quickshare-url: "https://noteshare.space/note/clpwsm8cd029101mw5igthdk1#pwVLMJJDvXgQ++PMSuMq9H7G6uIUWpkx9fzhC/ocf20"
---
### What is it?
C is just another programming language, like [[Python]] or [[Java]]. It's different to them in a few ways though. 

### Key Distinctions:
- Not object orientated (there's no classes, just collections of functions). 
- Not interpreted (compiled into executable machine code). 
- Run time errors (like *Array Out-Of-Bounds Exception*) are not caught by compiler. They'll get caught in the program and crash the application lol.
	- This also can lead to security vulnerabilities. 
- There's only data structures (structs), with some statically stored and others dynamically (with `malloc`). 
	- ![[Screenshot 2023-10-16 at 3.42.42 p.m..png|300]]
- There's no boolean. 0 is `False`, anything else is `True`. 

### Pointers, Simplified:
I've rewritten this bit a lot, pointers are a tricky topic man. What are they? Pointers are just other *variables that just happen to be the memory address of something else*. Why? We use this to pass variables around without changing their addresses. 

##### Example C code:
```C
int x = 4; // This simply sets a variable x to the value 4. English: "Integer x is set to 4"
int* pX = &x; // English: "pX is a pointer to an integer, and it's set to the address of (&) variable x."
int y = *pX; // English: "y is a variable set to the value pointed to by pX"
```

The `*` operator can be used in two contexts:
1. For declaring a variable as a pointer that points to a specific data type
2. For *dereferencing*: If something is a pointer, adding a `*` gets you the value pointed to by that pointer. Otherwise, it's just the address there. 


### Arrays in C:
- They're fixed at the size declared at Initialisation. 
- No knowledge of their length. (I.E. no checking if their indexing in bounds)
- Pointers are often used to carry arrays through functions.
- Index is 0 based.
##### Example Arrays:
```c
int m[] = {5, 8, 10}; // size fixed to 3
int n[2][10]; // two-dimensional array
			  //  with 2 rows and 10 cols
point p[4];   // array of 4 structs
```

### Strings in C:
- Strings are just arrays of chars. 
- An extra bit is taken up as Strings end with `\0`. 
	- $\therefore$ `char s1[] = “string, too"; // length=12`
- Assigning strings uses `strcpy(s, "string!")`. 

> [!warning] Warning!
> When comparing strings using *==*, you're comparing if their addresses are the same. You likely want to instead compare if their values are the same. 
> 



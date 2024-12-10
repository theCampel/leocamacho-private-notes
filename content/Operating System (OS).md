
> [!warning] Architecture$^2$
> Wait! This page refers to ***OS architecture***, which focuses on designing an environment for applications to run, abstracted away from hardware details. It's different from [[ISA (Architecture)]], which defines how software at the lowest level (eg [[(MIPS) Assembly Language|assembly]]) operates. 

## What Can It Do?
There's some key identifiers:
- It's in charge of separating the [[Kernel Vs User Mode]]. s.
- It runs [[Processes]]

## Parts to it...
It's the interface between a computer's hardware and the software running and users. It handles:
- [[CPU - Processor Components]]
- [[Virtual Memory]]
- [[IO]] and more...



### Potential [[Computer Security]] Concerns:
- The computer may have users with different permissions to the resources of the computer. The OS should have mechanisms to ***isolate different users***. ([[Privilege Separation]])
	- One user should be able to run `sudo`, another should not - quite a unique problem when you think about it. 
- The OS should have a way to run different applications at the same time, ***safely***. The terminal (or malicious app) shouldn't be able to access the memory of your web-browser.


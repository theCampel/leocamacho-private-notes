---
quickshare-date: 2023-10-05 15:38:21
quickshare-url: "https://noteshare.space/note/clnda8ohc1366601mw9ryr92by#kLJVW4rZILPBD3Z1B+A5BED3GTVmaZCS3jVSpc94jCk"
---
#ics 
AKA: Two's Complement Representation. 
### What's it all about?
Ok. This is all about being able to represent a [[Binary]] number as a negative. This is fucking hard. You can end up just making 0 be both positive or negative if you're not careful (1's complement). 

### How, simply?
You have a number in binary, and if there's leading 0's, it's positive, leading 1's it's negative. 

![[Screenshot 2023-09-25 at 1.42.16 p.m..png|400]]

### The Creator:
[[John Von Neumann]] was a bit of a G (according to lecturer, who is also a G).

### The Theory
##### Setup:
It's based off the idea that $X + (-X) = 0$. You represent the negation of X as the max number you can represent, minus the decimal for X (Example below). For example: Say we have a *3 bit* system and are dealing with the number 2 ($010$ binary). 
##### Find Negative:
To find $-2$, we get the highest possible number we can represent with *4 bits* (3 bits +1 for sign), and take take 2 away from that (in Decimal). In practise:
- $8 -2 = 6$ (dec) $\equiv 110$ (binary)
- $\therefore$ the binary for $-2$ in a 3 bit system is $110$. 

##### Confirm:
> $X + (-X) = 0 \equiv 110 + 010 = 1000$.
> Since it's a 3 bit system, we only check the 3 LSB's $\therefore 000 \equiv 0$. 
### How to do it?
Simple! How do you do it? Take the bits, flip them, and add one to the binary digit. 
##### EG:
- $X = 010$ (bin) -> 2 (dec)
- Flipped:  $=101$.
- Add 1: $110$. 

### Advantages:
- You don't have to design any special hardware with extra bits
- All operations are just addition with extra steps

### Drawbacks:
> The range of possible representations is not symmetric (thanks a lot 0). How does this show up / present itself? In a 4-bit word, the largest possible [[(Computer) Memory Conceptually|word]] is 0111 (7), the smallest negative is 1000 (8)

Also:
> It also has a funky way of [[Data Overflow]]. A positive overflow produces a negative number. A negative *underflow* produces a positive overflow. 


### Addition
It's not really that hard. You just have to be careful about overflow. A neat tip. If you have a carry in to the most significant bit and don't have one out (and vice versa), then you have an overflow problem. I.E. If the *carry in* to the MSB $\neq$ *carry out*, then you have an overflow
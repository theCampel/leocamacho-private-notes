## Imagine:
3 [[Cryptography|cryptographers]] are having dinner. At the end of the dinner, they're informed that the dinner has been paid for. Either the NSA paid or one of them did. They want to find out which, **without** revealing the identify of a (potentially) paying cryptographer.

### Process
1. Every possible [[Combinations|pair]] of cryptographer flips a coin, such that only those 2 see the result. ($\text{heads} = 1$, $\text{tails} =0$)
2. *Each participants announces* the [[Logical Connectives|XOR]] of *everything* they saw.
	1. If someone paid, then they instead announce the ***opposite*** of the **XOR** of everything they saw (i.e. the negation).
3. We then **XOR** the three announcements:
	1. If the NSA paid, the result should be: $0$
	2. If someone paid, the result would be: $1$

### Couple of Problems:
- ***Really impractical:*** - the number of flips required grows quadratically
- ***Fragile:*** If someone doesn't do the protocol, it breaks immediately.
- 

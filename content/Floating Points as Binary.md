---
quickshare-date: 2023-10-05 15:40:34
quickshare-url: "https://noteshare.space/note/clndabjaq1368701mwpzdc1hed#S8DiyOq7Xbc7fqPm0nRp/Q//sY6Lwz6QaLRaJmMfTT4"
---

Related: [[Binary]]
> [!note] Wtf is the bias?
> It's a number to add to exponent according to a standard so it's easier to work with exponents. Why? Avoids using +/- exponents. Simplifies ordering of FP.


Also also:
> [!info] Terms:
> ***Mantissa***: The (exclusively) binary number after the decimal point
> ***Bias***: See above lol
> ***Exponent***: You already know this, just pay attention to the sign

1. First, convert the FPN from base 10 to base 2. 
	- $0.75 \equiv 0.11$
	- $0.11 = 0.5+0.25$
		1. Normalise it:
	- $1.1\times 2^{-1}$
	- Why normalise?
		- Simplifies Machine Representation (you don't need a fraction separator)
		- Simplifies Comparisons
		- Compact for very large/small numbers
	- Meaning of exponent:
		- How much over to shift the decimal point. 
	- Mantissa (significand) is the (only binary) number after the point. Eg: 1 
3. Take the exponent and add the bias:
	- -1 +127 (Bias) = 126. 
	- Convert exponent to binary: 01111110.
4. Putting it all together:
	- 0 01111110 10000000000000000000000
	- {Sign} {Exponent} {Mantissa padded to fit 32 bits}

Values for for exponent:
![[Screenshot 2023-09-24 at 4.05.31 p.m..png]]

[[Floating Points as Binary | Mantissa]] 
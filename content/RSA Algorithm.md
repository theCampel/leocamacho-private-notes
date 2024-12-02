> [!danger] Oh My God
> When researching this for Uni, I came across these [2](https://www.youtube.com/watch?v=4zahvcJ9glg) [videos](https://www.youtube.com/watch?v=oOcTVTpUsPQ). It's some of the best teaching I've ever witnessed. 

> [!warning] Important note!
> ***The key idea behind the algorithm is that, while the Private Key and Public Key are different, they're mathematically related. It's impossible to guess how to go from one to the other.*** 

## What:
So, the crux of [[Asymmetric Encryption]] is that you can come up with a Private-Public Key pair that's pretty damn secure. How do you do that though? Using this Algorithm. 

### Encrypting the Message:
We'll use the following [[encryption]] formula
$$c = m^e \mod n$$

Where:
- $c$ is the **ciphertext** (the encrypted message).
- $m$ is the **message** that is being encrypted.
- $e$ is the **public exponent** (public key entry 1).
- $n$ is the **modulus** (public key entry 2).

***Basically:*** 
- Given a *public key* like `(5,14)`, you take your message, put `key[0]` as an exponent, and get the modulus of `key[1]` as your ciphertext. 

Example:
1. For this example, my public key is `(5,14)`. My private key is `(11,14)`
2. If I want to send the secret message `B`, I represent it as ASCII with `2`. 
3. My cipher text is: $2^{5}\mod 14 = 4$  
4. Therefore, my secret message `B` is encrypted as `D`

### Decrypting the Message
It's literally the same, but using the private key. 

### How'd you come up with those keys?? 
1. Pick 2 (HUGE) prime numbers.
	- $p = 2$
	- $q = 7$
2. Get the product of those numbers.
	- $n = 14$
3.  Get the *amount* of ***co-prime*** numbers with 14. 
	- *Co-prime: A number that does not share any factors with another.* 1
	- This number can be got with the formula: $(p-1)(q-1)$
	- $\phi(n) = 6$
4. Come up with a number $e$ that follows the following criteria:
	- $1 < e < \phi(n)$
	- $e$ is co-prime with both $n$ and $\phi(n)$. 
	- Note how $5$ is both of those. 
5. Finally, we want to come up with a number $d$ - your letter for decrypting.
	- Choose $d$ such that: $de(\mod \phi(n))=1$ 
	- There'll be infinite amount of options to choose from. There's some (more complicated) rules to this. 


## What?
It's the mechanism for how we create a [[Asymmetric Encryption|private key]] over an unsecure channel. It's not so much exchanging keys, but actually creating them together. We'll see that below:

### Setup:
-  Imagine you've got Alice's private key, Bob's private key and a pre-established key. They also both openly agree on a HUGE number $n$. There's also a much smaller number, $g$. This tends to be a smaller, prime number that is used so commonly the same that many computers just use a pre-existing number as a standard.

1. Alice randomly chooses a private key, $a$, between $1$ and $n-1$. Bob also does the same for private key $b$.
2. Alice makes $A = g^{a}\mod n$. She shares $A$ publicly. 
3. Bob makes $B=g^b \mod n$. He shares $B$ publicly.
4. Alice will then compute her final secret: $s_{alice} = B^a \mod n = (g^{b} \mod n)^a \mod n = (g^b)^a \mod n = g^{ba} \mod n$
5. The beauty of this is that whenever Bob calculates his final secret, it will ALSO EQUAL $s=g^{ab} \mod n$. And neither of them shared either $a$ nor $b$ to the public! Genius imo.
6. ***Alice's Public Key:*** is $(n,g,A)$, where $A=g^{a} \mod p$
7. Don't ask how (right now), but we can use that to come up with a cipher-text that is only undone if someone has $a$. 

### (Open) Problems:
- This works flawlessly!.. If you're assuming the attacker in the open is passive. But what if the attacker changes the values that get shared to the public? Like the attacker would be able to tell Alice it's Bob and Bob it's Alice. The solution? Sign every message using [[Digital Signature]] ***(Station to Station)***. 
- You can achieve [[Forward Secrecy]] by using temporary (ephemeral) private keys for each session. 

### Station to Station:
- When sharing $A$ or $B$ publicly, sign them with your private key (requires effective [[Public Key Infrastructure (PKI)|PKI]]). That way, anyone who tries to be in the middle, isn't able to change their ***A*** to ***E***! *(Remember, thanks to [[Asymmetric Encryption]], we can sign things with our private key, and our public key let's people know it's exclusively ours!)*

## ElGamal Encryption, by Comparison:
Surprisingly simple. 
- In Diffie-Hellman, two parties come up with a key together (using the algorithm above.)
- In El Gamal, we come up with 2 keys and use them for the encryption. It comes up with 
	- Instead of simply saying *"Ok cool we've both agreed on keys to use"* as DH does, ElGamal just starts using the keys to encrypt and decrypt messages. 

Thus, DH is a sub-set of ElGamal.


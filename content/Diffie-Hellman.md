## What?
It's the mechanism for how we share a [[Asymmetric Encryption|private key]] over an unsecure channel. It's not so much exchanging keys, but actually creating them together. We'll see that below:

### Setup:
-  Imagine you've got Alice's private key, Bob's private key and a pre-established key. They also both openly agree on a HUGE number $n$. There's also a much smaller number, $g$. This tends to be a smaller, prime number that is used so commonly the same that many computers just use a pre-existing number as a standard.

1. Alice randomly chooses a private key, $a$, between $1$ and $n-1$. Bob also does the same for private key $b$.
2. Alice makes $A = g^{a}\mod n$. She shares $A$ publicly. 
3. Bob makes $B=g^b \mod n$. He shares $B$ publicly.
4. Alice will then compute her final secret: $s_{alice} = B^a \mod n = (g^{b} \mod n)^a \mod n = (g^b)^a \mod n = g^{ba} \mod n$
5. The beauty of this is that whenever Bob calculates his final secret, it will ALSO EQUAL $s=g^{ab} \mod n$. And neither of them shared either $a$ nor $b$ to the public! Genius imo.

### (Open) Problems:
- This works flawlessly!.. If you're assuming the attacker in the open is passive. But what if the attacker changes the values that get shared to the public? Like the attacker would be able to tell Alice it's Bob and Bob it's Alice. The solution? Sign every message using [[Digital Signature]]. 
- You can achieve [[Forward Secrecy]] by using temporary private keys for each session. 
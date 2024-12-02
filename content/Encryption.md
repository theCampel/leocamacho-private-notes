## Speed. I am Speed.
We care about efficiency. One of the ways we do this is by using [[Asymmetric Encryption]] to securely send over the [[Symmetric Encryption|symmetric keys]]. (The latter is quicker.)

## What makes a secure encryption?
- Ideally an enemy can't make their own secret *key*.
- Ideally an enemy can't recover the entire plaintext *m*.
- Ideally an enemy can't recover *any* of the plaintext *m*.

## The attacker may have access to:
- Some plaintext
- Some cipher text / plain text pairs
- They may have access to the encryptor (*encryption oracle*) that can encrypt plain text. 
- They likely would only have a realistic amount of compute.

## WTF do we do with Keys?
Good question lol. 

### What's Malleability in Encryption:
If an attacker can change the ciphertext in such a way that it ***predictably*** changes the then decrypted plaintext, the encryption is malleable. 

## Types of Encryption
- [[Symmetric Encryption]]
- [[Asymmetric Encryption]]
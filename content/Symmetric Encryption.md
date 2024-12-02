## What?
Encryption where everyone that wants to read the message, has the same key. 

### What makes a secure encryption?
- Ideally an enemy can't make their own secret *key*.
- Ideally an enemy can't recover the entire plaintext *m*.
- Ideally an enemy can't recover *any* of the plaintext *m*.

### The attacker may have access to:
- Some plaintext
- Some cipher text / plain text pairs
- They may have access to the encryptor (*encryption oracle*) that can encrypt plain text. 
- They likely would only have a realistic amount of compute.


## WTF do we do with Keys?
Good question lol. 

### What's Malleability in Encryption:
If an attacker can change the ciphertext in such a way that it ***predictably*** changes the then decrypted plaintext, the encryption is malleable. 
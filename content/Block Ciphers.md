(In [[Symmetric Encryption]])
## What?
The problem with [[Stream Cipher|stream ciphers]] is that the key cannot be reused. Block ciphers avoid that. By encrypting the plain text in chunks, we can reuse it.

## How to do that... securely?
There's one called ***Cipher Block Chaining***. 
1. You first randomly initialise a random block of data. 
2. You XOR it with the first block of data. 
3. You then take that new block of data and XOR it with the next one. You keep doing that. Boom easy.


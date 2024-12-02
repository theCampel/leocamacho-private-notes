### What?
Type of [[Symmetric Encryption]] where you come up with a random binary string (the key), then perform XOR on your plaintext (as binary obviously). The result is indistinguishable from random. To decrypt, you do XOR on it again. 

### Some gang shi:
- It's damn cool. This is one of few encryption algorithms that the ciphertext is genuinely indistinguishable from random.

### Some less gang shi:
- You can only use each key once. Otherwise it becomes quite predictable. (You can do statistical analysis on the letters and stuff). If it gets reused, it's called a ***Two Time Pad***.
- The key has to be as long as the plaintext.


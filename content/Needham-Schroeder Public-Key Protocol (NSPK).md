## What:
Another [[Diffie-Hellman|key-exchange]] protocol developed in 1978.

### Given:
- Alice (initiator)
- Bob (receiver)
- $K_A$ : Alice's public key
- $K_B$ : Bob's public key
- Message $\{M\}_K$ is encrypted with $K$

### Protocol Steps:
1. Alice sends Bob an encrypted message (containing a secret unique number) with his public key: 
	1. $\{A,N_A\}_{K_B}$
2. Bob responds back to the message, with his own secret unique number. He encrypts the message with Alice's public key: 
	1. $\{N_A,N_B\}_{K_A}$ 
	2. He sends Alice's number to confirm he got it
3. Alice responds with $\{N_B\}_{K_B}$ to confirm she's received the message. 
4. After all this, they can confirm they're both talking with each-other securely.

### Problem:
- It's susceptible to a [[Network Attack Types|Man-In-The-Middle]] attacker. Imagine inserting yourself in between Alice and Bob. Since there's no authentication, you could have a secure chat between both of them, but simply act as proxy. Boom!
## What?
They're modern, more secure alternatives to [[Password Authentication|passwords]]. They use [[Asymmetric Encryption|public-key cryptography]].

### How?
1. When signing up to the website, a [[Public Key Infrastructure (PKI)|public-private key pair]] is generated. The private is stored securely on user's hardware.
2. When logging in, server sends a challenge (just a large random number) to the user.
3. The user [[Digital Signature|signs the challenge]] with their private key.
4. If the server can decrypt it with the public key, the user must own the private key (akin to [[Zero Knowledge|proof of knowledge]]).

#### Benefits:
This brings a slew of benefits:
- Can't be phished
- Resistant to replay attacks and eavesdroppers.

> [!question] Why did this take so long?
> You may be thinking, *"Ok Leo, but asymmetric encryption has been around for a long time. Why is this only now popping off?"*. Couple of reasons:
> 
> - Only recent adoption from device makers for cross compatibility
> - *Ease of use*: Before, it would have been a pain for users to manage their private keys. But with Apple (and others) incorporating more intuitive UX, users simply have to use their fingerprint / FaceID to work. 
> - Consumer education is a big one.






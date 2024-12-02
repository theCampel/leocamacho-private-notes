## What?
Similar to an actual digital signature in the real world, it's a cryptographic string that **mathematically proves** that something is coming from a specific person. It's a similar method to the [[Asymmetric Encryption|double encryption]] thing. 

### How?
1. We take the document that requires a signature.
2. We hash it.
3. We add padding
4. We then encrypt that with our private key. (Because if our public key opens it, then it was from us). 

### Why does this work?
1. We sign our hash with our private key. Since only our public key would reveal it, then it must have been us (this is the actual signature part). 
2. The recipient of the document can be sure that the public key is authentic thanks to the [[Certificate Authority]], and the [[Public Key Infrastructure (PKI)|PKI]] in general.
3. If the attacker would try to change anything, the hash would look different. 

### How would this look in actuality?
1. We'd send bunch of messages
2. We'd take a summary of the ones we sent, hash them and encrypt them with our private key.
3. Thus anyone receiving can take those messages, do the same and decrypt with our public key. If they were truly from us, they'll be the same. 
4. Pretty neat, eh?
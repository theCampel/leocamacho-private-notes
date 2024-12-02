## Objective & Background:
- Point-to-point secure channel. No-one in between can read the message contents. (Also ofc we're maintaining the [[Computer Security|computer security standards]]). (***Confidentiality***)
- It should detect corruption of communication. (***Integration***)
- The server ***must*** prove itself to the client. The ***client*** may prove itself to the server. (***Authentication***)
 
### Setup:
- Assume an adversary has full control of the network, it can redirect all traffic, it can read all data, it can be a man in the middle.   
- Assuming that, TLS should still work. 

### How though...
1. 🟦: The traditional [[TCP Vs UDP|TCP Handshake]] (at which point the [[Asymmetric Encryption|asymmetrically encrypted]] connection is established).
2. 🟩: The client says hello, and lists the encryption standards it supports. 
3. 🟩: The server responds to use the strongest encryption standard. 
4. 🟩: The server sends its [[Certificate Authority|certificate]] 
5. 🟩: The server sends confirmation.
6. 🟦: The client encrypts a [[symmetric Encryption|session key]] with the server's public key and sends it.
7. 🟦: The next 4 blues depend on the specific encryption method used. ([[RSA Algorithm]] is basic key exchange.)
8. ◻️: They then use the session key to communicate with each other 😎. 
![[Pasted image 20241027130732.png|600]]

## The Attacks:
- **LOGJAM 🪵**: What if the someone hopped in the middle and immediately only offered super weak encryption methods. (They didn't change anything though). Then the encryption could be broken with brute force.
- **Bleichenbacher (B98) 🃏**: In a specific RSA, there was padding. If you sent a message with incorrect padding, the recipient would respond differently, based on how messed up the padding was. So, if Eve snooped in between Alice and Bob, copied the message but changed it slightly and sent it to Alice, Eve would get different responses. If Eve did this about a million times, with different messages every time, Eve could eventually recreate the message.
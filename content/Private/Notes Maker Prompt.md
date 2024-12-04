
I store all of my Atomic notes on Obsidian. When I encounter something new, I make a new note and link to any related concepts. Below is an example of my notes about SSL and ARP. Now, write a similarly formatted (and similar writing style) note about "Self Driving Cars".


# SSL.md
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



# ARP.md
## Background: 
Basically, all computers who want to communicate with another in the same subnet, need both their [[IP address]] and their [[Mac Address]]. Why, you may be asking? Because the MAC Address is the "*inner-most envelope*" and always gets hit when a hardware NIC wants to talk to another. The IP Address is the same except for one level up. 

## So ARP?
It's the protocol that maps IP Addresses to MAC Addresses. It's pretty shit ngl. It works by:
- `Computer A` will check it's ARP [[Cache]], to see if it already has a the mapping. 
- If not, `Computer A` will broadcast on the network screaming *"Oi! Who's at MAC is at 192.168.1.73??"*
- `Computer C` will then respond with *"Yeh `A` it's me! Here it is..."*

## Security Vulnerability
Butttttt... ARP is blindly faithful. 
- It doesn't keep track on whether a machine has recently ***even asked*** for a new IP address.
- If someone tells you about a new IP, it will change the table entry, regardless of how recently that was changed.

### Man In The Middle / ARP Poisoning
The good ol' Man In The Middle attack is based of this, with an eavesdropper telling both about new ARP entries. 
![[Pasted image 20240923170953.png|600]]
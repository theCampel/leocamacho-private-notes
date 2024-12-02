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
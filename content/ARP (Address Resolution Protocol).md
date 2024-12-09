## Background: 
Basically, all computers who want to [[TCP-IP|communicate]] with another in the same subnet, need both their [[IP address]] and their [[Mac Address]]. Why, you may be asking? Because MAC Address is needed to communicate to the other devices on a hardware level, and the IP is needed to communicate on the internet layer. 

## So ARP?
It's the protocol that maps IP Addresses to MAC Addresses. It's pretty shit ngl. It works by:
- `Computer A` will check it's ARP [[Cache]], to see if it already has a the mapping. 
- If not, `Computer A` will broadcast on the network screaming *"Oi! Who's at MAC is at 192.168.1.73??"*
- `Computer C` will then respond with *"Yeh `A` it's me! Here it is..."*
- *Note: `Computer X` could just tell `Computer A`  that any arbitrary IP address is at any arbitrary mac address, even if `A` didn't ask. `A` will change her ARP Cache regardless. Explained below:*

## Security Vulnerability
Butttttt... ARP is blindly faithful. 
- It doesn't keep track on whether a machine has recently ***even asked*** for a new IP address.
- *If someone tells you about a new IP, you will change the table entry, regardless of how recently that was last changed.*

### Man In The Middle / ARP Poisoning / ARP Spoofing
The good ol' Man In The Middle attack is used here, with an eavesdropper telling both about new ARP entries. 
![[Pasted image 20240923170953.png|600]]

#### Defences Against That:
- For critical systems, hard-code the ARP entries
- Segment the [[Network Attack Types|network]] with VLANS
- VPNs and Secure protocols.
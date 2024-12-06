## What're the fundamentals?
- **Confidentiality**: Some information should never be revealed to non-authorised entities.
- **Integrity**
	- Untampered
- **Availability**
- **Authentication**
- ***[[Anonymity]]***
- **Unlinkability:** An attacker should not be able to deduce whether different services are delivered to the same user.
- **Non-repudiation**: The author of an action should not be able to deny doing said action.

## Security Threat Categories
- Interception
- Interruption
- Modification
- Fabrication
- Repudiation
- Epistemic

## Security Principals:
- ***Defence in Depth***: Like a castle, build multiple layers of the of security. If one fails, another acts as redundancy / reduces impacts. 
	- EG: Firewalls, intrusion detection, network segmentation, antivirus, least privilege etc.
- ***Least Privilege***: Users / programs should only have access to what's required. 
- ***[[Privilege Separation]]***: Segment the system into components which can be accessed. EG apps need distinct permissions.
- ***Open Design:*** Avoiding security through obscurity. 
- ***Economy of Mechanism:*** Keep a security mechanism simple.
- ***Fail-Safe Defaults:*** The default should be conservative. Eg New users should have least privileges.
- ***Complete Mediation:*** Every access to a resource should be checked for compliance with security policy. 

## Security Goals in Web Browsers:
- Web apps should provide the same security guarantees as normal apps.
1. `evil.com` shouldn't infect the rest of my computer
2. `evil.com` shouldn't compromise my `gmail.com` session
3. Sensitive info on `gmail.com` should be kept that way. 

## Related Topics:
- [[ARP (Address Resolution Protocol)]]
- [[Computer Security]]
- [[Diffie-Hellman]]
- [[Domain Name System (DNS)]]
- [[Firewall]]
- [[Injection Attacks]]
- [[IP Address]]
- [[Live CD Attacks on Memory]]
- [[LLM Jailbreaking]]
- [[Load Balancers]]
- [[Load Balancing]]
- [[NAT (Network Address Translation)]]
- [[Passkeys]]
- [[Smurfing Attack]]
- [[TCP Vs UDP]]
- [[TCP-IP]]
- [[Tor 🧅]]
- [[Tor Hidden Services]]
- [[Zero Knowledge]]
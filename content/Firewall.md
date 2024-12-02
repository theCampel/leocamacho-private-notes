## What?:
A device that isolates the "*secure*" private network to the "*unsecure*" public network.

### How?
Basically it applies *policies* (read: rules) that decides whether to allow or deny traffic. May look something like below. Note that the rules go top to bottom. :

![[Pasted image 20241002114639.png|500]]

## Types of Firewalls:
#### Packet Filters (stateless):
- If a packet matches the packet filter's set of rules, the filter will drop it.

#### Stateful:
- Maintains a record of all connections passing through it and can determine if a packet is either the start of a new connection, an existing connection or an invalid packet.

#### Application Layer:
- Works like a ***proxy*** - can *"read"* through protocols. Would inspect traffic, blocking based on it's rules (eg blocking websites, viruses etc.).

#### Takeaway of them?
They're good. You need one. But they won't do much. 
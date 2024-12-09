## What:
It's a key part of [[TCP-IP]]. Basically, the data that's to be sent, is split into packets:
- Each packet is sent independently through the network. 
- Each device tries it's best to forward it to the final endpoint
- Packets could take different routes between the same endpoint
- They could also be dropped and never delivered.


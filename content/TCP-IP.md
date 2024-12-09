## What:
It's the set of networking protocols that establish a standardised way different systems communicate with each other, regardless of software / hardware environments. It's split into layers:

![[Pasted image 20240923164756.png|600]]

![[Pasted image 20240909170451.png|400]]

### 4. Application Layer
The layer that **tells the software on a computer/server the methods to reach out to the internet**. There's protocols for how applications do so, for example, `SMTP`, `HTTPS` and `FTP`. 

The protocols here describe how data is formatted. EG. `HTTP` describes how web pages are requested and served. These protocols typically follow the [[Client-Server Architecture]].

### 3. Transport Layer
This layer instructs **how to reliably (or unreliably) transport data between two hosts**. Key things about it:
- Splits data into segments (A file).
-  Processes have **sockets** (AKA the combination of IP address and Port numbers).
- This is where [[Packet Switching]] occurs.
 The two main Protocols are [[TCP Vs UDP]].

### 2. Internet Layer
Responsible for the **addressing, routing and fragmenting of data** to ensure they can traverse different networks. It uses the `Internet Protocol (IP)` to do this. Key concepts:
- Data is split into packets (Eg. Request header and payload). Packets contain source and destination IPs
- Data is routed from router to router across different networks. (First from your router to your ISP's *"router"*, then from there to closer and closer networks). There's multiple different routing algorithms to be used. 

### 1. Network Interface Layer
Handles the interaction between the hardware (cables, network cards etc) and the rest of the local network. Protocols include:
- Ethernet
- Wi-Fi
- [[ARP (Address Resolution Protocol)]]

### Communication Channels
Each layer _thinks_ they're talking with the same layer somewhere else. This can be known as the **Virtual Communication Channels**. (*Layers talk to the same layer*)

In reality, they're going down the layers, across the hard, actual wire and then back up to the layer at the relevant layer. 

![[Pasted image 20240917153210.png|700]]

## Encapsulation of Packets
Basically, each layer has an "envelope". The Application Layer will send a HTTP request and pass it "away". The Transport layer will then chuck that in an "envelope", give it a header and some info and pass it away. The network will take it, chuck it in an envelope and so on. That way, as it passes back up the stack, the application layer will only see application layer stuff. 

![[Pasted image 20240917154010.png]]
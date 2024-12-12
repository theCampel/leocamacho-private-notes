## What?
There are two main protocols in the [[TCP-IP|Transport Layer]] part of the TCP/IP suite of protocols. They're all about transporting data *reliably* or *unreliably* from machine to machine. 

### *TLDR:*
- TCP is slower, more reliable, ensures data integrity, and is typically used for web browsing, email and file transfers.
- UDP is faster but less reliable, and is typically used for streaming, gaming and VoIP.

### TCP:
- **Connection-based**: TCP first establishes a connection between the sender and receiver *before* transmitting data. (Three way handshake)
- **Reliable**: TCP sends acknowledgements (ACKs) back for each successfully received packet (thus can be resent in case of error). Includes checksum for validation and sequence numbers to rebuild the packets. 
	- Each packet has a sequence number in its header - signifying what position in the original order it came.
	- With *each packet* successfully received, the endpoint sends back an ***ACK***. 
- **Slower**: Cos of the establishing the connection and the additional overhead.
- **Flow & Congestion Control**: To avoid overwhelming the receiver, TCP uses the [[Sliding Window Protocol]]. 
- This guys in charge of a lot of the ports. 
![[Pasted image 20240910103829.png|300]]

#### TCP's Three Way Handshake:
- TCP is all about having clear, consistent, reliable communications between computer and server. They begin their communication like so:
1. **Client** sends a `SYN` segment. - *"Hey Server! Can we start talking (ie can you open a connection for me)?*
2. **Server** acknowledges with a `SYN-ACK`. - *"Sure thing! Open one for me too!"*
3. **Client** acknowledges with `ACK` - *"Sure! Now we're talking!"* 

*Note about the numbers: They're both keeping track of the package they sent, and the number the other person last saw. This helps them tell if one was sent out of order accidentally.*

![[Pasted image 20241212100943.png|600]]
#### The Actual Communication Under TCP:
- If at some point the `seq num` or `ack num` is incorrect, the client/server will say *"Hold up! Missing a packet!"* 

#### Syn Flooding:
- If *Attacker* sends a bunch of `syn` packets (low memory), the server's queue will hold half-open connections. 
- Once the queue is full, the server can't handle legitimate requests. (Because it has no space for any more `SYN` entries)
- What if attacker spoofed its address as well? 
###### Defense:
- Firewalls
- Rate Limiting
- 

### UDP:
- **Connection-less**: Does not establish a connection beforehand. It just sends packets *Hail Mary* style.
- **Unreliable:** There's no error recovery on lost packets. Hell, there's no way of (as the sender) even knowing if your packets got there (to the receiver) in the first place. 
- **Faster**: Because you're just shooting packets willy-nilly, you can afford to spam them *much* faster. 


> [!quote] Lol
> "*I'd tell you a funny joke about UDP but you might not get it*"

### UDP MultiCast:
This is just UDP but focused on sending it to across *multiple, specified* devices and systems. It works by:
- Receivers join a multicast group. (A specified subnet of IP addresses)
- The senders just blindly send to the subnet. 
- Good for Video conferencing, stock price distribution etc. 
- Also avoids having sending unnecessary packets to the internet. 
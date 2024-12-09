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

Three Way Handshake:
![[Pasted image 20240923173127.png|150]]

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
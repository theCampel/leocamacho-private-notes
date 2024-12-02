## What?
Ok so think about what an internet actually is. It's an *interconnected network* - i.e. a network of networks. Two devices ***within*** two ***distinct*** networks may have the same IP. That's fine! They're on separate networks. But what if they want to talk to each other? Cue NAT.

#### NAT:
Your device is within a network, managed by a router. That router has a dedicated IP (that's visible to the outside world). When your device makes a request for that external server, your router swaps out your IP for it. So that when the external server responds, it responds with the message for your router. Your router, then responds for you. 

Basically, NAT is in charge of masking the details of the network beneath it. 



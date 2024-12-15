## What?
- A *low-latency* protocol that uses *onion encryption[[Encryption|encryption]]*. All packets are constant sized. 
- ***Onion Encryption:***
	1. Client crafts a message. It's encrypted like an onion.
		- First encrypted with ***exit node's public key***. Since this wraps / encrypts the message, it's the inner-most layer.
		- Then encrypted with ***second node***.
		- Then encrypted with the ***entry node***. Thus, this layer is the outer most layer. 
	2. Client sends the message to the entry node. Entry node unwraps the outer-most-layer. 
	3. Entry-node forwards that to a middle node. Middle node unwraps the next layer. 
	4. Middle node forwards that to exit node. Exit node sends the traffic to the server. 
	- *Note: Look at the individual nodes and what they know. The exit knows what's the final destination. The entry node knows client is using Tor, but that's it. Middle node knows sweet fuck all lol.* 
 ![[Pasted image 20241027174510.png]]

### **Problems:** 
- ***Susceptible to Global Adversaries:*** If someone can see all of the traffic across the entire network, they can determine where your traffic is going. 

## Attacks:
- ***Time Correlation Attacks:*** 
	- Imagine you control the entry and exit node. 
	- You observe the traffic's timing and volume. 
	- You try and pair the entry's patterns to the exit's patterns. 
	- *Requires entry and exit node control. How would you have access? Maybe a selective DOS 😉*.
	- (Also applicable to [[Mixed Communication]])
	
- **End to End Correlation:** Basically the same, except you look at timing, volume, sequences (i.e. bursts, gaps etc..)
- ***Cryptotagging:*** 
	- Imagine we controlled both entry and exit node, and flipped a single [[(Computer) Bit|bit]] at the beginning.
	- When we decrypt the data at the exit node, the plain-text request may be slightly corrupted at the end. Thus we associate the entry and exit node.
	- Avoidable if using [[TCP-IP|HTTPS]].
- **Selective Denial of Service:** Image you own the first *"guard"* node, and an exit node. During the client's first establishing of the relay, you could keep dropping the connection until the relay randomly chooses your exit node. 
- **Website fingerprinting:** All websites' traffic looks slightly different. This could be a use of [[(Machine Learning) Models|machine learning]]. You could visit the top 100 most common websites, each a million times and then us ML to determine whether a specific visit is actually that website (the accuracy drops as the amount of websites being scanned rises). 
- ![[Pasted image 20241215184221.png|400]]

## Tor Hidden Services:
 In the giant image above, the servers are distinctly outside of the Tor Network. Tor Hidden Services is all about moving your servers inside the Tor Network. This anonymises the server. 
 
#### How?
 1. When the server comes online, it will randomly choose 3 normal nodes. These are known as ***Introduction Points***. 
 2. The server then makes (Tor) connections with the *Intro Point* (i.e. with 3 hops between). 
	 1. It tells these IPs: *"Hey! I want you to act as a gateway. Whenever someone comes looking for me, send their traffic to these already established channels."*
	 2. It also publishes *"Descriptors"* to a distributed database.
		 1. It's basically a dictionary that says *"If you're looking for this `.onion` address, ask one of these Introductory Nodes"*
 3. A user will randomly choose a *"Rendezvous Node"* (and a new 3 hop connection is established between them). User then asks Node to send the *IntroPoint* a string *"secret"*. 
 4. The server will respond (via a new, fresh 3 hop relay) *to the Rendezvous Node* with a string secret. 
 5. The *Rendezvous Node* then bridges connection between client and server. In this version, there's ***6 hops*** between the client and server. Slow, but both are completely anonymous to everyone involved.

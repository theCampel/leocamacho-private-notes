## What?????
Yeh before you think this is a journal entry, it's actually about how we create [[Anonymous Communication]], subscribing to the [[Computer Security|security principals]]. 

### How?
- It works by taking a bunch of users' requests, mixing them and then sending out batches of requests to the servers.
- If you send a request, you need to include a *"return address"* encrypted with the mixer's public key. That way, you send a request, the mixer batches it, sends it to the server, the server responds to the mixer and mixer returns to you. 

### The Different Types:
- ***Time based***: The mixer can send out the batches after a $t$ seconds of traffic. That way, every message the mixer received in the last $t$ gets released.
	- **Problem:** [[Anonymity]] is entirely relying on a busy server. If only 1 person accessed the mixer, then it's obvious who's request that was
- ***Quota Based (Threshold):*** The mixer sends out batches after $n$ requests.
	- **Problem:** There's no guarantee how quickly you'll get it. 
- ***Quota and Time (Pool) Based:*** The mixer should have a minimum amount of messages ($n$) at all times. If that quota is matched, every $t$ seconds random fraction of $n$ gets released. 
	- **Problem:** You need lots of memory for the queue to be held.
- **Client Delay (Continuous) based:** Each client says "delay my message this long". The Mixer only has to obey it. Decide it randomly.

## How Could Sender Be [[Anonymity|Anonymous]] To The Server?
- Craft a request envelope. It has an encrypted *"original sender"*. 
	- The *"original sender"* field is encrypted with the *"Response Mixer"'s* public key. 
	- The entire envelope is encrypted with the *"Forward Sending Mixer"'s* public key.
- Send this to *"Forward Sending Mixer"*. 
	- FSM decrypts the first
- Mixer sends this to the server. 
- Server responds to a *"Response Mixer"*
- *Response Mixer* decrypts the *"Original Sender"*'s address. 
- Response Mixer then sends it back

![[Pasted image 20241215174059.png|500]]

#### Why Use 2 Mixers?
- ***Single Point of Failure:*** A single mix could tie the user to the server. If it got compromised, security over. 
- Prevents Time Correlation Attacks.


## Attacks on Mixed Communications:
- ***Time Correlation Attacks:*** 
	- Imagine you control the entry and exit node. 
	- You observe the traffic's timing and volume. 
	- You try and pair the entry's patterns to the exit's patterns. 
	- *Requires entry and exit node control. *
	- (Also applicable to [[Tor 🧅]]) 
	- It can be defended by ***padding messages*** and ***buffering***. 
- ***$N$-1 Attack:***
	- If a *mixer* has a capacity of $N$, then what's to stop the attacker sending $N-1$ messages with a known location?
	- When you send the final message, you're easily linked to the recipient

## *Defences Against* Attacks on Mixed Communications
- It can be defended by ***padding messages*** and ***buffering***. 
- ***Dummy messages:*** Prevents the $N-1$ attack. That way they can't be linked back to you.



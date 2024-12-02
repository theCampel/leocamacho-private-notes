## What?????
Yeh before you think this is a journal entry, it's actually about how we create [[Anonymous Communication]], subscribing to the [[Computer Security|security principals]]. 

### How?
- It works by taking a bunch of users' requests, mixing them and then sending out batches of requests to the servers.
- If you send a request, you need to include a *"return address"* encrypted with the mixer's public key. That way, you send a request, the mixer batches it, sends it to the server, the server responds to the mixer and mixer returns to you. 

### The Different Types:
- ***Time based***: The mixer can send out the batches after a $t$ seconds of traffic. That way, every message the mixer received in the last $t$ gets released.
	- **Problem:** [[Anonymity]] is entirely relying on a busy server. If only 1 person accessed the mixer, then it's obvious who's request that was
- ***Quota Based:*** The mixer sends out batches after $n$ requests.
	- **Problem:** There's no guarantee how quickly you'll get it. 
- ***Quota and Time Based:*** The mixer should have a minimum amount of messages ($n$) at all times. If that quota is matched, every $t$ seconds random fraction of $n$ gets released. 
	- **Problem:** You need lots of memory for the queue to be held.
- **Client Delay based:** Each client says "delay my message this long". The Mixer only has to obey it. Decide it randomly.
- 
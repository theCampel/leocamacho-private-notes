## What
A server that handles incoming traffic and distributes it to the actual servers.

![[Pasted image 20240910173523.png|500]]

### Strategies for Balancing Big Loads 😉
- **Round Robin:** Simple af. Just serve your servers in an iterative fashion and loop back around to the first once you've served them all.
	- **Works for:** Servers of equal specs and workloads of relatively equal size.
- **Least Connections:** Sends work to the servers based on how busy they already are.
	- **Good for**: Longer tasks or when server load isn't evenly distributed
- **Least Response Times**: Choses the most responsive, least laggy *and* least connected-to server. 
- **IP Hasher**: Gets Hash of IP and gives it to a server. Semi-equally-randomly directs a client to a server based on the client's hash. 
	- **Good For**: Ensuring a client has consistent access to servers.
- **Weighted Algo's**: Basically the same vibe for the first few, but each server is assigned weighting based on how busy / capable it is.

### What about a Load Balancer Failure?
- Add redundant load balancers to avoid this. 
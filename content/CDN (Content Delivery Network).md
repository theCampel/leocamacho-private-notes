## What
A system for quickly delivering *the same* content to users, regardless of geographic location.

### How?
- There's a central server. There are then auxiliary servers that carry [[Cache|cached webpages]] of the main server. 
- When someone requests a webpage, the request will first go the nearest CDN server and check. 
- If it's there, it will return it to the user.
- If it's not, it will go to the origin one, then set it on the CDN server then return to user. That is a pull-based one.

![[Pasted image 20240910114941.png|500]]

### Considerations:
- Origin server should *never* crash. Reduces latency and improves availability
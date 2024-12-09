## What?
Ideally, you give a DNS server[[Name Server]] a false address record and get it cached. Then, when a user makes a request to that DNS server, the cache is your fake record! Boom, the user, unbeknownst to them, is now a victim.

### To Who?
- If you're in the same network as a device making a DNS query, you can ***see*** it making that query (eg with [[Wireshark]]).
- Alternatively, other [[Name Server|name servers]] are also making requests (Even ISP's) - . If you can see and cache responses for it, you're cooking.

### How?
The query often has a randomised, 16-bit identifier and return port. Which means that guessing it and serving it back to the device querying is hard. But if you just spam those? You've got a somewhat decent likely-hood of getting a hit. 

### How, like actually?:
1. The attacker would (hopefully) infiltrate a webpage and put 1 million invisible images on it - each making DNS Queries to non-existent domains / IPs. Since they don't exist, they've never been cached locally.
2. *Then*, the *attacker* will return million responses with their details in it instead!


### Defences against it:
- ***Port Randomisation:*** The identifier can be spammed, but what if we randomise the source port? Then the chances of guessing that also drops.
- ***Limit Cache Lifetime (TTL - Time To Live):*** Minimises impact of poisoned cache by expiring records quickly. 
- ***Rate Limiting:*** Limits the number of [[Domain Name System (DNS)|DNS]] responses processed per second from the same source.




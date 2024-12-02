## What?
Ideally, you give a DNS server a false address record and get it cached. 

### To Who?
- If you're in the same network as a device making a DNS query, you can ***see*** it making that query
- Alternatively, other [[Name Server|name servers]] are also making requests (Even ISP's). If you can see and cache responses for it, you're cooking.

### How?
The query  often has a randomised, 16-bit identifier and return port. Which means that guessing it and serving it back to the device querying is hard. But if you just spam those? You've got a somewhat decent likely-hood of getting a hit. 

### How, like actually?:
1. The attacker would (hopefully) infiltrate a webpage and put 1 million invisible images on it - each making DNS Queries to non-existent domains / IPs. Since they don't exist, they've never been cached locally.
2. *Then*, the *attacker* will return million responses with their details in it instead!


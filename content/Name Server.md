## What?
It's ***the*** [[databases]] that ***hold*** [[Domain Name System (DNS)|DNS Records]]. It can also ask other name servers for the records as well. 

###### But wait! Surely there's a problem laying here!
Indeed! Whoever controls a name server - controls where people are going...

A reminder of [[Domain Name System (DNS)|DNS Servers]]:
![[Pasted image 20241002095654.png|500]]

### Root Servers:
They're the authoritative name servers. These guys are ***the*** guys to listen for DNS records - regardless of what any *other* name server is saying. For example, `dns0.ed.ac.uk` is the ***authoritative*** name server for `ed.ac.uk`. 

ICANN manage the authoritative name servers of `.com` etc. The IP of those servers are hardcoded in most machines. 

## Name Resolver:
What is a resolver? It's a program that retrieves DNS records. It then ***caches the records*** it's received. There's 2 types:

#### Iterative Name Resolution
1. First, your machine's resolver will ask the root of the tree - "*Where tf is `.com`?*". The root will respond.
2. Then, it'll say "*Sweet thanks! (goes to the `.com` DNS servers) Hey `.com`! Where's `google.com`??*". `.com`'s respond appropriately.
3. Rinse and repeat until you get the full domain. 

![[Pasted image 20241002095354.png]]

### Recursive Name Resolution:
Similar vibe, except the servers do the searching for you. Notice that this way, all of the name servers learn about the full domain on the way. 

![[Pasted image 20241002095923.png]]
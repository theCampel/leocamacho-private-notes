## What?
It's ***the*** [[databases]] that ***hold*** [[Domain Name System (DNS)|DNS Records]]. It can also ask other name servers for the records as well. 

###### But wait! Surely there's a problem laying here!
Indeed! Whoever controls a name server - controls where people are going...

A reminder of [[Domain Name System (DNS)|DNS Servers]]:
![[Pasted image 20241002095654.png|500]]

## How does Iterative Name Resolution Work?
1. Your computer wants to find out where `google.com` is. It asks the nearest name server (likely your ISPs). If (for some weird reason), your ISP doesn't have it, it will ask the DNS tree. 
	1. The ***Root Server*** (root node on the tree) is likely hardcoded in your computer - there's only about 20. One's run by ICANN, another by NASA lol. 
2. Your ISP asks the Root Server of the DNS tree where `.com` is.
3. It will respond. You then ask that server where's `Google.com`. It says *"No idea, but here's `ns0.google.com`"*. 
4. You then ask `ns0.google.com` where `google.com` is, and it'll tell you!
	1. In this case, `ns0.google.com` is the ***authoritative name server*** for `google.com`
	2. `dns0.ed.ac.uk` is the authoritative name server for `ed.ac.uk`
5. In all of this, the ISP [[Cache|caches]] the records it received.



#### Iterative Name Resolution
1. First, your machine's resolver will ask the root of the tree - "*Where tf is `.com`?*". The root will respond.
2. Then, it'll say "*Sweet thanks! (goes to the `.com` DNS servers) Hey `.com`! Where's `google.com`??*". `.com`'s respond appropriately.
3. Rinse and repeat until you get the full domain. 

![[Pasted image 20241002095354.png]]

### Recursive Name Resolution:
Similar vibe, except the servers do the searching for you. Notice that this way, all of the name servers learn about the full domain on the way. ***TODO: NEEDS CLARIFICATION*** 

![[Pasted image 20241002095923.png]]
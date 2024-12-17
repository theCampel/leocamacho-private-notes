How do you actually find out what [[IP Address]] is at `google.com`? The DNS protocol. It's [[TCP-IP|application-layer]]. Similar to [[Domain]], it's the `many-to-many` mapping. The [[Name Server]] are the thing that actually hold the information.

***It's actually a distributed database that stores all of the relevant records'***
- Addresses (A Record)
- Mail Exchange
- Name Server
- TTL
### Example:
`google.com` -> `216.58.213.11` and many more

## Quickly, the distributed DNS Tree:
![[Pasted image 20241002095654.png|500]]

- Every computer knows the top root node (it's hardcoded in). 
- That [[Name Server]] knows the location of all of the `.com`, `.edu`, `.org` etc. name servers. Each one of their respective ones knows all of the domains within their name servers. 
- Eventually, you'll get a name server (eg. `dns0.ed.ac.uk`) that will know the exact IP of a domain. That's the ***authoritative name server***.

## How does Iterative Name Resolution Work?
1. Your computer wants to find out where `google.com` is. It asks the nearest name server (likely your ISPs). If (for some weird reason), your ISP doesn't have it, it will ask the DNS tree. Each request has a unique ID (cos these name servers also have to serve many other people - not just you).
	1. The ***Root Server*** (root node on the tree) is likely hardcoded in your computer - there's only about 20. One's run by ICANN, another by NASA lol. 
3. Your ISP asks the Root Server of the DNS tree where `.com` is.
4. It will respond. You then ask that server where's `Google.com`. It says *"No idea, but here's `ns0.google.com`"*. 
5. You then ask `ns0.google.com` where `google.com` is, and it'll tell you!
	1. In this case, `ns0.google.com` is the ***authoritative name server*** for `google.com`
	2. `dns0.ed.ac.uk` is the authoritative name server for `ed.ac.uk`
6. In all of this, the ISP [[Cache|caches]] the records it received.


![[Pasted image 20241002095354.png]]

### Recursive Name Resolution:
Similar vibe, except the servers do the searching for you. Notice that this way, all of the name servers learn about the full domain on the way. ***TODO: NEEDS CLARIFICATION*** 

![[Pasted image 20241002095923.png]]



### Distribution of Responsibility
So in reality, ICANN manages the root of the tree. They give specific *registrars* the responsibility to manage the `.com` or `.edu` or `.uk`. Then they (`.com` registrars for example) will be in charge of giving out the `google.com`. This helps avoid name collisions. 

![[Pasted image 20241002093436.png]]

## Vulnerabilities:
- [[DNS Cache Poisoning]]
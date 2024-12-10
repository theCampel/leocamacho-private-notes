How do you actually find out what [[IP Address]] is at `google.com`? The DNS protocol. It's [[TCP-IP|application-layer]]. Similar to [[Domain]], it's the `many-to-many` mapping. The [[Name Server]] are the thing that actually hold the information.

***It's actually a distributed database that stores all of the relevant records:***
- Address (A Record)
- Mail Exchange
- Name Server
### Example:
`google.com` -> `216.58.213.11` and many more

### Distribution of Responsibility
So in reality, ICANN manages the root of the tree. They give specific *registrars* the responsibility to manage the `.com` or `.edu` or `.uk`. Then they (`.com` registrars for example) will be in charge of giving out the `google.com`. This helps avoid name collisions. 

![[Pasted image 20241002093436.png]]

## Vulnerabilities:
- [[DNS Cache Poisoning]]
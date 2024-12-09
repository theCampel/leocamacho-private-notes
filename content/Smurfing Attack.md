## What?
Remember that if you send something to [[IP Address]] ending with `.255`, it's a broadcast port. So if you send a ping it, everyone will respond to you saying they exist. But what if you sent a ping to it, pretending to be someone else? Then everyone will send *that* IP with a bunch of ping results. Boom. Genius. I know. It's called a *Reflection Attack*.

### Legit Use Cases:
- `ping 192.168.1.255` will cause everyone on that subnet to respond to you. (Ping carries forgeable information about where it's coming from.)
	- You could legitimately want to know who's on the subnet. 

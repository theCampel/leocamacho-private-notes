## Imagine:
1. You're on `bank.com` and `evil.com`
2. The [[DOM|DOM Tree]] (webpage) of `bank.com` has sensitive information. 
3. Why wouldn't `evil.com` be able to write a script that gets the information from `bank.com` (as it comes in?)

## What?
- 
- Prevents scripts on one webpage from accessing data from another domain
- Enforced by the browser.  
- The ***Origin*** part is the combination of protocol, [[Domain Name System (DNS)|domain]] and port. 
- If the requesting resource's origin is the same as the target resource, then it's allowed. 
	- Unless CORS (*Cross Origin Resource Sharing*) is enabled

#### What about... `iframes`?
Well that's also protected. If I run `bank.com` on an iframe inside my `evil.com`, `evil.com` still cannot inspect the stuff within it. 

### What About Legitimate Use Cases (Cross Origin Communication)?
- The `postMessage` interface allows windows to talk to each other no matter where they come from, ***if and only if:***
	- Both domains agree to and call corresponding JS functions


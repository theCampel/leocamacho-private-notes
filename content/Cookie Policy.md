> [!todo] Reminder!
> Remember [[TCP-IP|HTTP Protocol]] is stateless. It remembers nothing about you previously. Cookies help sites remember who you are and your preferences!
> - *First Party Cookies:* Are the ones set by the site you're browsing
> - *Third Party:* The ones set by ad servers on ads on the website you're currently on.

## What's the Policy?
- Controls how accessible cookies are with flags:
	- `SameSite`
	- `Secure` (Https only)
- And Scope:
	- Basically just which domains can access it.
		- Cookies are set to domains. They will apply to any subset of that domain. EG:
		- Cookie set for `example.com` applies to `www.foo.example.com`. 
		- Cookies 

### Cookies' Attributes:
![[Pasted image 20241129115917.png|500]]

### Who can set cookies?
- The cookie is set by the server in [[TCP-IP|header response]]. 

## Cookie Stealing / Session Hijacking :
If someone got access to your cookie, they pretend to be you... How could they do this?
#### Guessing / Looking:
- Thus, cookies should be unpredictable. 
- If the cookie gets sent over plaintext (cos HTTP was used), then you're a bit cooked. 

#### Cross Site Scripting:
- Cookies are stored locally in your browser. 
- We'll inject a script into an insecure blog. The script could take the users' cookies and send them to the attacker. 
- There's 2 types:
##### Stored XSS:
- The script is *stored* on the server, and the user comes upon it when requesting the resource
	- EG: Script is stored in comments section, victim gets infected when they're loaded.
- The more dangerous one ngl.

##### Reflected XSS:
- Imagine you made a google search for something, and it looked like:
	- `https://google.com/search?q=<script>exploit here</script>`
- If you then got the victim to go to that link, then the user would be hacked cos on the screen you'd have: 
	- *"Here's the results for \<a script hehehe\>..."*
- More realistically, if someone goes to a malicious link, they could have a script that actually calls Google etc. and gets the cookie from that.

##### Defences Against XSS:
- Escape dynamic data before actually writing it. 
- Input Validation
- ***CSP:*** Server provides a list of allowed whitelisted scripts. 

#### Cross-Site Request Forgery (CSRF):
- When a malicious website (`evil.com`) tricks the user's browser into making a request to a trusted one where the user is already authenticated (`bank.com`). 
- Remember cookies have a `domain` flag. If the user is already authenticated on `bank.com`, any request the browser makes to `bank.com` will include any relevant cookies.  
- The servers at `bank.com` will assume the request is legitimate, and treat it as such.
- Soooo if our `evil.com` can manage to make a request to `bank.com` from the victim's browser, then boom. 
##### How to prevent?
- ***CSRF Tokens:*** Each user session has unique token. The server validates it's legitimate.
	- Therefore, it's up to sites to check that the request is coming from who it says it is.
![[Pasted image 20241129152107.png|500]]



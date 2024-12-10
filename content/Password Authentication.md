## Context:
How does the [[Operating System (OS)]] identify its users:
- ***Username*** and ***password***.
- Part of [[Computer Security]]


### Password Attacks:
- ***Man In The Middle:*** Eve sits in the middle of me and the server as I try and authenticate. 
	- ***Defence:*** [[Encryption]] using [[SSL - TLS|TLS]]
- ***Social Engineering:*** Clicking on a link and submitting your credentials into somewhere where they're not meant to go.
	- ***Defences:*** 
		1. Make it difficult for phish to reach users.
		2. Make it easy to detect and report phish.
		3. Protect against phish if they did go through.
		4. Respond quickly to threats.
	- Also just user a password manager.
- ***Malware:*** I shouldn't need to explain what it is. But if you've got it, then they might have key-logger software.
	- ***Defence:*** 2FA. 
- ***Brute Force Guessing Attack:*** Guess everything. 
	- ***Defence:*** Rate limit them loser.
- ***Dictionary Attack:*** Take common words / passwords and brute force over millions of passwords 
	- ***Defence:*** Also rate limit, but also choose pass-phrases. Include Capatchas (where possible) to prevent bots from guessing.
- ***Offline guessing attacks:*** If worst comes to worst and your [[Databases]] of passwords got leaked, what're you gonna do? Imagine you stored them all in plaintext. Then every user you had is now compromised. 
	- ***Don't Encrypt Passwords:*** If hacker could steal passwords, they can likely steal the key as well. Anyone with the key can view passwords.
	- ***Don't Just Hash Passwords:*** If multiple people share passwords - it'll be pretty easy to guess what everyone is with a frequency analysis. 
	- ***Salt and [[Hash Table|Hash]] Passwords!:*** Get a password, add a random string to it and [[Cryptographic Hash Functions|hash]] it. Every user has a unique salt. 
		- Additionally, use a slow hash function!

Just use ***MFA and Password Manager!!!***





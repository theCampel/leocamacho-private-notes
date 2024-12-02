## What:
Basically a giant [[firewall]]. How do you avoid it?

- ***No Single Point of Failure:*** Store multiple copies, add multiple paths. There's lots of redundancies. 
- ***Collateral Damage:*** We want to intertwine something genuinely useful with the thing that's likely to be taken down. Hopefully, the adversary doesn't care enough to go through the effort of taking the useful thing down. (I.e. making your site look identical to AWS).
- ***Don't Look Suspicious:*** Pretty obvious. Try make your censor traffic look exactly like Skype or different from the censored traffic.
	- Tunneling
	- Emulating
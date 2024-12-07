> [!note] Context
> The following is in the context of [[AI]]-generated content.

### A good watermark should...
- Be robust, even if the attacker knows the way the watermark was implemented. 
- Should be ***Robust*** - detectable after cropping, rotating or editing
- Shouldn't be conspicuous.
### Couple of Methods:
- Change the least significant bits of an image to be your watermark. 
	- ***Problem:*** If people knew that, they could easily set the [[Binary|LSB]] to a random value. 
- Alternatively, can you prove an image *came from a camera*? (content authenticity)


### Should you open-source the tools?
- Helps make available the tools. 
- Helps the attackers up their "mouse game"
- 
## What?
Think back to [[Symmetric Encryption]], where everyone necessary already has the key. How do you communicate securely with someone who doesn't **already have a key**? (Called Asymmetric because there's 2 keys involved). 

### Public Key Encryption:
You can openly share the ***Public Key*** with people, and it's good to *encrypt* everything. To *decrypt*, however, you need a ***Private Key***. 

## How it works:
1. Bob will first generate a ***Private Key*** and ***Public Key*** pair. (Analogous to a key and padlock respectively, everyone can lock but only the key-holder can unlock). Most keys use the [[RSA Algorithm]].
3. Alice will request the *public key* (padlock) from Bob. Bob will send it
4. Alice will encrypt her message using the public key and send it to Bob. 
5. Bob can decrypt *her* message using *his* private key. 
6. They will now repeat this process for Alice, so she can now decrypt Bob's encrypted messages. 

![[ScreenRecording2024-10-21at4.28.51p.m.-ezgif.com-video-to-gif-converter.gif|500]]

### *Double Encryption* (Italicised cos it's cool.)
- If you encrypt something with Alice's public key, then only her private key can open it. 
- If something's encrypted with your private key (of which only you have), then only your public key can decrypt it. 
- Therefore, if you encrypt something with both your private key *and then* Alice's public key, then Alice can be sure that that only she would've been able to open that message and that it definitely came from you (in that order).
- If something you encrypt something with your public key, then only your private key can open it. 


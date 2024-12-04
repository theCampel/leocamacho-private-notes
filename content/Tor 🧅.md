## Goals:
- Low-latency (thus only good against local adversaries - I.E. if someone can see the entire internet, it's not that good).
- Onion encryption.
- Constant sized packets.
## What?
- There's layers of encrypted tunnels. The first onion node knows the client and the middle node. The last exit node knows the middle and the destination. No single entity knows the what client is talking to what server. 
- **Problem:** If someone actually owns the onion servers, then you're cooked.
 ![[Pasted image 20241027174510.png|500]]

## Attacks:
- **End to End Correlation:** If you own the first and last node, you can make correlations to check if the data the first one is sending is the same as the one the last one is relaying.
- **Selective Denial of Service:** Image you own the first *"guard"* node, and an exit node. During the client's first establishing of the relay, you could keep dropping the connection until the relay randomly chooses your exit node. 
- **Website fingerprinting:** All websites' traffic looks slightly different. This could be a use of [[(Machine Learning) Models|machine learning]]. You could visit the top 100 most common websites, each a million times and then us ML to determine whether a specific visit is actually that website (the accuracy drops as the amount of websites being scanned rises). 

> [!warning] Important!
> This is not the same as [[Efficiency in Algorithms]]. This refers more to the speed of a [[Distributed System Architecture|distributed system]].
## What:
When talking about the speed of a system, we often want to maximise speed. But what does speed mean? There's 2 kinds we may want to maximise:
1. **Latency**
2. **Throughput**
#### 1. Latency
Latency is about how fast your system **responds to a *single* request**. It's measured in milliseconds. The lower, the snappier performance for the end-user.

#### 2. Throughput
Throughput is all about how many requests the system can handle simultaneously. Higher throughput means more users can be served at once. (Measured in *requests per second* - the higher the better)

### The Catch?
Optimising for 1 severely hurts the other. For example, [[Cache|caching]] frequently used information reduced latency, but means the available memory for other users is now reduced - thus reducing throughput. Or batching requests can handle throughput but reduce latency. 
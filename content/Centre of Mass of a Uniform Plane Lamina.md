Ok. This is definitely one of the harder applications of Integration, because it involves (at least how the course taught it - deffo would have been different if Sal Khan taught it) a bunch of slight nuances on how to do it. Long story short, there's no 1 size fits all for every possible lamina you get. 

Now for the fun. Take the following diagram:
![[Pasted image 20230805213844.png]]

There's a few things we need to establish before we can do any work with it. 
1. The *mass is uniformly distributed across the lamina*. I.E. It's equally dense all around.
2. In fact let's take that density thing a bit further. If we divide the entire shape into *equally tiny square units* and they all have the same mass, then let's call the density of each *square* $\rho$. You can also read this as ***mass per unit area***. If you have an area of 2 square units, then it's mass is $2\rho$. 

Ok great. Now say we want to find the location $G(\bar{x},\bar{y})$ (I.E. The centre of mass for the lamina). How would we go about it?
1. Divide the lamina into tiny pieces
2. Calculate the mass of one of those pieces
3. Calculate the moment of each of those masses
4. Using integration, get the sum of all of those moments (for each axis separately)
5. Using integration, get the sum of the masses of those small pieces
6. Using the [[Moments and Centres of Gravity - Mass|formula for centre of mass]], ($\frac{moments}{masses}$), calculate the Centre of Mass for both $\bar{x}$ and $\bar{y}$. 

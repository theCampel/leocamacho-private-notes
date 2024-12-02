 Using [[Word Embeddings]] to represent a word like the following:


> [!info] How do they work?
> Take all the words you know and initialise a 0-list of that length (with each word tied to an index). Iterate over the sentence you want to encode. Change the value associated with each word to amount of times it appears. EG:
> 
> The sentence *"I love apples, bananas and dates, but apples the most!"* of an encoding $[apples, bananas, carrots, dates]$ would look like $[2,1,0,1]$.
> 
> This isn't technically accurate, as in reality, as 'one-hot' implies, it's more like: $banana: [0,1,0,0]$. 

It may seem inefficient for large dictionaries, but computers are quite efficient when representing long lists of 0's. The reason it's not the greatest, is it's quite difficult to learn the relationships between different words. This is something [[Vector Embeddings]] is better at. 
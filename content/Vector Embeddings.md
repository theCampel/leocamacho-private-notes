Time for some big brain moments right here. Imagine you didn't know the word for "pet" and I asked you the following: *Are the words "cat" and "dog" similar? Why? And how can you quantifiably prove this?*

The words, [[Language|lexicographically]], are not similar at all (Bar they're both 3 letters. But so is *"bus"*). But we *intuitively know* they're similar. Cue the following idea:

##### *Key idea 1:*
**Words are similar if they're consistently used in similar contexts.** 'Cat' and 'Dog', **when taking a large enough corpus**, are consistently used around words like 'cute', 'puppy' etc.. If you think about it in a mathematical sense (vectors), words that are similar to each other are words that are near each other in vector space. The vector for '*King*', would be quite near to '*Queen*', but quite far from '*Zoo*'. 

**Note: The idea is contingent on being trained on a corpus that reflects real language.**

Now for what you came here for:
> [!info] What are vector embeddings (finally)?
> Using an already trained algorithm, you encode each word in a sentence as a vector. Similar words will be in neighbouring vector space.  


#### Some really cool gangsta shiii:
Take the vector for '*King*', subtract the vector for '*Man*', add the vector for '*Woman*' and call your resultant vector $V$. The word in the nearest vector space to $V$ should be (if using a properly-trained vector embedding algorithm): '*Queen*'. 

Alsoooo. Vector encodings is how Google Reverse Image search works. If you  *split* specific bits of an image up into vectors, similar images will be ones where there's lots of nearby vectors. 




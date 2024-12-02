### What:
Imagine you have a given set of requests guitar notes. They all have different durations and start at different times. We want to schedule the notes such that the most amount of unique notes play, but none overlap. 

### Why even care about this problem?
It's a pretty clean example of [[Greedy Algorithms]]. By consistently making the small decisions that benefit you now, it compounds to be the best solution for the answer.

### Solution:
- For each note, select the note that *finishes* first.
- Remove all other notes that have a conflict with this note. 

### Proof:
Yeh I didn't write it here. It's on the open course. 


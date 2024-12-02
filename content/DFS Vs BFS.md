### Depth First Search:
- Given a node on a [[Graphs]], explore to the next non-visited node. Label the edge you just took as discovery edge. 
- Keep doing this until you're faced with purely explored paths.For each edge you that's explored, label it a *back edge*
- Backtrack to the most recent step in the path that had a unexplored paths. 
- Repeat.  
- Eventually, you'll backtrack to A. Thus, you're finished.
##### Notes:
- Enabling the labelling stops you from running infinitely.  
- ***Time Complexity***: $O(n+m)$ 


### Breadth First Search:
It selects an arbitrary root node neighbouring nodes first, before moving down to the next level of neighbours. It's like *"sweeping"* through a maze

###### Specifically:
- Given every node in level $i$, mark each node that's *reachable* as the next level, level $i+1$ . 
- Repeat until there's no unexplored nodes. 

![[Pasted image 20240120171148.png|500]]

***Time Complexity:*** $O(n+m)$

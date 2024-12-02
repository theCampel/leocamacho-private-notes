---
quickshare-date: 2024-05-03 19:43:18
quickshare-url: "https://noteshare.space/note/clvr0wfup662201mw29zqaw4e#LmwesDYw13FhA72JdHTpJ/ODb5qn5VDqCxC3qk55vYQ"
---
### What?
It's a [[Dynamic Programming|dynamic programming algorithm]] to convert any [[Language|language sentence]] into a parse (language) tree. It works on [[Chomsky Normal Form]]. 
### How Does it Work?
1. First, ***split up your sentence*** into a table as below. Split your sentence up with $(i,j)$ coordinates, with $i\le j$. Each valid coordinate is a substring of that sentence
![[Pasted image 20240207142114.png|500]]
2. You will work diagonally downwards, before filling up as much as the remaining column above you as you can, before moving diagonally down again. 
3. At each step you will see what your current substring can be made out of, using the culmination of the already solved substrings
4. Take (0,1). That's a $Det$
5. Now move onto (1,2). That's a $Adv$
6. Now move onto $(0,2)$. For **"my very"**, *nothing can be made* up of a $Det$ and a $Adv$.
7. Continue downwards and upwards until you get the top right. If it's a valid start, then you have a valid sentence. 
8. ***Note:*** Each layer you went up and across you had to consider all the possible new substrings.
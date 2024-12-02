### What?
***A way of categorising difficulty of computational problems***. 

##### Background: Types of Problems:
- ***P* Problems**: Problems that can be solved by a computer in [[Time Complexity|polynomial time]]. Can be thought of as (relatively) "easy" problems
	- EG. Sorting a list, finding shortest path between two points on a graph, etc.
- ***NP* Problems**: These are problems that are ***verifiable in polynomial*** time, but we don't think/know/care if they *can be **solved*** in polynomial time (E.G. Jigsaw puzzle). 
- ***NP Hard* Problems**: It's an NP-Hard problem if every (even the hardest) NP problem can be reduced to it in Polynomial time. (Thus meaning an NP-Hard problem is at least as hard as the hardest problems in NP). 
- ***THE NP Complete* Problems**: The toughest of them all (EG. [[Boolean Satisfiability Problem]]). They've 2 properties:
	1. They belong to *NP* (quickly verifiable)
	2. Many NP problems are equivalent. Thus if one of them can be resolved to P, then they all can. I.E. ***A problem that can be [[Polynomial Time Reduction|reduced]] to all other NP problems.*** I.E. The second criteria is if it's also NP-Hard. 

### P=NP ?
A while ago, people found clever polynomially timed algorithms for some *NP* problems, putting them firmly into the $P$ bucket. The question then arose. Are all *NP* problems actually just *P* problems in disguise? Is *P=NP* (DUN DUN DUNNNN)??????? The truth, we don't know, but smart people don't think it's the case. 

###### Implication:
If we found a proof that was able to distill any type of NP Problem into a P problem, then every hard computational problem (encryption, training AI, protein discovery), would instantly become theoretically doable. 


![[P-NP-NP_Hard-NP-Complete-1-1-1024x783.webp|300]]


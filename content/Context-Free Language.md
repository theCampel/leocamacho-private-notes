### What?
It's a type of [[Language]] with specific types of rules. 

### Contains:
- ***Terminals*** (+, -, 0...9, (, ), x, etc - $\Sigma$), 
- ***Non-terminals*** (*Exp*, *Var*, *Num* - $N$) , 
- ***Start symbol*** (*Exp* in this case - $S \in N$) and 
- ***Rules / Productions*** ($P$ of the form $X \rightarrow \alpha$, where $X \in N$, $\alpha \in (\Sigma \cup N)^*$). 
- *Rules example*:
 ```
	Exp → Exp + Exp
	Exp → Exp * Exp
	Exp → Var | Num | ( Exp )
	Var → x | y | z
	Num → 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```
- *Example legal sentence tree* (aka context tree) of above:
	![[Pasted image 20240206195617.png|200]]

### How do you build a tree from a sentence?
I'm glad you asked. Cue the [[CYK Algorithm]]!
### What
It's a subset of [[Context-Free Language]] with 3 strict requirements. They are:
1. $A$ -> $BC$ (two non-terminals)
2. $A$ -> $a$ (a single terminal)
3. $A$ -> $\epsilon$ (empty string)

### Why bother?
Well it turns out ***any legal production ruleset*** of a [[Language]] can be transformed into CNF. Then we can apply the [[CYK Algorithm]] to turn a sentence into a tree using the CNF version of it.
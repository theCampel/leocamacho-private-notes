Python is a great programming language. 

### How is Equality Testing Done in Python?
There's multiple ways of checking if two things are equal in Python. This relates heavy to the idea of [[Stack vs Heap]]. 

If we're referring to whether the items have the same address in [[(Computer) Memory Conceptually|memory]] (by reference), then we'd use `list1 is list2`. Otherwise, if we wanted to perform **deep** checking (i.e. check *by value* that there's identical things at those addresses), then we'd use the `list1 == list2`. 


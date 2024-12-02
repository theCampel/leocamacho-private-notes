### How does it work:
The fundamental principal is to split the original array into two, and [[Recursive Algorithm|recursively]] apply Merge Sort on them. You repeatedly divide the array into half until the base case (you have an array just 2 long). Compare the 2 items, and join them in the correct order. Now begin building back up. Now you have 2 sorted arrays each of 2 long.  Compare the first of both arrays, then insert where necessary. Repeat until you have a sorted array of 4 long. Repeat until you reach the top of the rabbit hole again. 

[[Time Complexity]]: Best case and worst case scenario are actually quite similar. It is $\Theta(nlg(n))$ .




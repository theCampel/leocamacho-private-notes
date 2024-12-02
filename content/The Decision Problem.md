### What? (AKA The Halting Problem)
There was a lot of debate about whether there were problems, given any compute and infinitely smart algorithms, could not be solved. This became known as [[Computability]]. Eventually, Alan Turing realised the answer was yes. The below is one such problem. 
### Problem 
Alright, first let's set up the problem.
- You have **code**. 
- You have a black box function, called $\text{HALTS}$, that takes the code and returns `True` or `False`. If the code would ever terminate, it returns `True`, and it would stuck in an infinite loop, it will return `False`. 
	- Note: The code for example could have `while(True)`.
- If you were to pass inverter into itself, you'd have a catch22. 
	- If the code for inverter would halt, then the inverter would run indefinitely
	- But if the inverter would not halt, then it would finish...


```python
def HALTS(code):
    # Return True if the code would halt eventually
    # Return False if it would run forever
    pass

def inverter(code):
    if HALTS(code): # I.e. If code would stop
        while(True):
            print("THIS CODE WILL RUN FOREVER BOOM IT'LL BLOW UP EVERY COMPUTER")
    else: # Else if the code would run forever
        print("Finished")


# The following print statement will blow up in a puff of logic
print(f"The solution to {inverter(inverter())} is...") 

```

Thus, any such function $\text{HALTS}$ is not computable. The existence of one implies a paradox.
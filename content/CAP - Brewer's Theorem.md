## What:
Basically, you can only have **two of the following three** in a distributed system. (*Note: It's never so black and white - you'll often have degree's of severity for the below)*:
- **Partition Tolerance**
- **Consistency**
- **Availability**

![[Pasted image 20240909162041.png|300]]
#### Partition Tolerance:
Inevitable, [[Distributed System Architecture|distributed system]] ***will fail***. Partition Tolerance refers to how the system is able to operate, even without 

#### Consistency:
**All clients accessing the system would see all of the *same data* at the *same time***, regardless of the node of the system they're accessing.

#### Availability:
This refers to the ability for a system to **respond to all requests at all times**.

### Example:
![[Pasted image 20240909153212.png]]Imagine an incredibly simple bank. They've only got 2 ATMs, and all information is stored locally on those ATMs. Imagine those 2 ATMs suddenly lost connection (*Partition tolerance*), but the system did not combust into flames. The bank has 2 options:

1. **Be *Consistent*:** They could prohibit users from withdrawing / depositing money, until the ATMs are able to communicate again (but the service *would not be available*). The ATMs would have consistent balances though. 
2. **Be *Available*:** They could enable users to withdraw/deposit, but the balances in the machines would not be consistent. (This would actually cause shit to hit the fan even worse - cos imagine the balance is not consistent and then 1 person takes money from both ATMs).

### Example 2:
For a social media website commenting feature, it's an acceptable design choice to limit consistency (users don't see the same comment) so that users are all able to access it regardless. 


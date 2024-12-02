## What
It's a [[Computer Security]] concept that prevents misbehaving users / applications from harming the rest of the system. Remember, computers are both multiuser and multitasking!

### How?
First we must ask **"*Who* is allowed to access *what* and *how*?"**. *Note:* We assume the user is authenticated and that *every* requests is mediated - a *reference monitor* enforced specified access controls.  

##### Types of Users:
Each have a *user ID* - `uid`.
1. User accounts
2. Service accounts
You can also group them into... groups. Groups have *group ID* - `gid`. 

##### File Permissions:
Resources (sockets, directories, files) are all managed with:
- read (***r***), write (***w***) and execute (***x***) permissions
- Permissions are defined by the owner of the file. Only root and owner can change them. 
- Only root can change file ownership. 

### Elevating Privileges
Imagine an executable file (owned by Bob) with `setuid` enabled. If Alice executes the file, then the `euid` is Bob's, not Alice's. This makes writing `setuid` files tricky 

### Unix's Approach:
All applications installed by a single user account has the same privileges. It's better to delegate capabilities associated with specific root powers. IOS, for example, has per action permissions (eg apps need to request locations, camera and health separately). 
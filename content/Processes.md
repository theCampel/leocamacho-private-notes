> [!note] Note
> This page is for ***computer processes***. I don't know why you'd ever make one about the English term, but hey, in case you do, you've now got a clear distinction.

## What
It's an instance of a program that's currently executing. It has [[Process States|states]]. About:
- They must be loaded into [[Virtual Memory]] and uniquely identified (`pid`).
- `pid`'s have CPU times, memory usage, user ID that spawned it - `uid`, etc.
- Processes might control other processes (*fork*).
- Child process inherits context from parent process.

#### What can it do?
- By default, the process only has the [[Privilege Separation|privileges]] that it's parent `uid` has. 

#### Permissions! (Lowkey quite cool)
Every process has 3 user IDs:
- ***Real User ID*** (`uid`): The user ID that actually started the process
- ***Effective User ID*** (`euid`): The user ID that determines the process' privileges. For example, you may want to temporarily run `sudo`, at which point the terminal's command changes its `euid` to `0` (root's).
- ***Saved UserID*** (`suid`): We save the user ID before changing the `euid` so we can go back to it. 

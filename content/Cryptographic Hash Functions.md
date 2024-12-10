## Background
Have you ever considered how we verify the authenticity of certain messages? We use a ***One Way Function*** called Hashing. Basically, we take anything, and convert it to a seemingly random (but entirely deterministic) string. 

There's also the desire for a ***collision resistant function***. What does that mean? A function that makes it really hard to find two messages $m_1$ and $m_2$ such that $f(m_1) = f(m_2)$. 

## For what?
It's used for a lot:
- File integrity when downloading something (you can compare your hash to the sites)
- Password verification - instead of storing plaintext passwords - you store their hashes. 

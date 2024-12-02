> [!warning] Important Distinction
> This page relates to Entropy in [[Information Theory]], not Thermodynamics. 

### What?
Entropy quantifies the amount of uncertainty, unpredictability or randomness in a system. The higher the unpredictability, the more information that is potentially contained in a message. *Minimum entropy is the **most informative** message*. 

### Mathematically:
$$H(X) = -\sum_{i=1}^{n} P(x_i) \log_b P(x_i)$$ Where:
- $P(x_i)$ is the probability of the occurrence of the $i$-th outcome 
- $b$ is typically base 2 (for information in bits). 
- $X$ is a discrete random variable with possible values $\{x_1, x_2, \dots ,x_n\}$
- $-\log_b P(x_i)$ refers to surprising-ness (surprisal).  


 
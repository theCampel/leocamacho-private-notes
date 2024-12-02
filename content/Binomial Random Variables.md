Similar to [[Random Variable (Probability)]]:

### Binomial Random Variables
Imagine you're flipping a coin several times, and you're only interested in how many times it lands heads up. This situation, where you have a fixed number of identical trials (coin flips), and you're counting the number of successes (heads), can be described by a binomial random variable.

- **Trials**: You flip the coin 10 times.
- **Success**: The coin lands on heads.
- **Probability**: There's a 50% chance for heads on each flip.

Your binomial random variable X represents the number of heads you get in those 10 flips.

#### Expectation of Binomial Random Variables:
The number of successes you can expect after repeating an experiment many, many times.

#### Variance of a Binomial Random Variable
Variance for a binomial random variable measures how much the number of successes is likely to fluctuate from the expected value.

Still with the coin:
- You would not always get exactly 5 heads in 10 flips; sometimes it could be 3, other times 7. Variance captures this spread of possible outcomes around the expected 5 heads.

The formula for the variance of a binomial random variable $X$ with $n$ trials and probability of success $p$ is $n×p×(1−p)$. For our coin:

- Variance $=10×0.5×0.5=2.5$

This means if you repeatedly flipped the coin 10 times, the number of heads would typically vary from the average (5 heads) by about the square root of 2.5, which is about 1.58 (the standard deviation).

So while you expect 5 heads on average, it's typical to see a number of heads that's plus or minus around 1 or 2 from that average in any given set of 10 flips.
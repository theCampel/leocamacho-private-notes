### What?
When [[Segmenting Speech or Language|segmenting spoken language into words]], we have to assume if sounds are part of a new word or not. 
### How will we calculate it?
[[Conditional Probability]]!! Woooohoooo!! So, for the word "gdog", the probability of the sound "d" given the sound of "g" is right before it. 

### Maths Example:
Suppose the phoneme `[ð]` (pronounced "th") occurs 200,000 times in a text:

- 190,000 times are before a vowel (as in *the*, *this*);
- 200 times are before `[m]`.

$$p(vowel|ð) = \frac{190,000}{200,000} = .95$$
$$
P(m|\text{ð}) = \frac{200}{200,000} = 0.001
$$
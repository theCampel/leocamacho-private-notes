## What:
We designed this system of [[Reinforcement Learning|RL]] (albeit very weak form of RL) to keep [[AI]] models [[Alignment|aligned]] to human values. 

### How?
1. Models go through their normal [[AI Pretraining|pretraining]]. Now models are able to come up with coherent text.
2. Now this is imperfect - it outputs stuff against our values. The solution? Fine-tune it! Ok... But how? 
	1. Using human annotators, rank possible outputs from the models in terms of quality.
	2. Take these outputs, and ***train another model*** to ***be*** a human annotator... We'll call this the *reward model*. 
	3. The reward model can now judge the base model based on human preferences. 
3. We fine tune the base model, using RL with an algorithm called [[Proximal Policy Optimisation]]. This encourages positive, human aligned text. 
4. To ensure we don't lose the coherence of the original base model, we add a penalty for losing coherence. 

## Controversy 👀:
Andrej Karpathy has [shat](https://x.com/karpathy/status/1821277264996352246) on RLHF, saying it's basically not RL. Honestly, I'm inclined to agree. Basically:
1. The Reward Model looks at the LLM's output. Based on it's general vibe (*as decreed by humans*), it encourages / discourages it. It's a crappy proxy (as opposed to the better but abstract goal of *"Reward it based on how 'correct' it was"* - what does it mean to be correct?). 
2. You also don't get the creativity of RL. It's the traditional AlphaGo vs AlphaZero. 
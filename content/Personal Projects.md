> [!note] Why Build?
> I've learned to ruthlessly follow your passions in life. You [[Learning|learn]] more, meet cool people and [[Spirals|spiral upwards]]. You should always try and build things that are outside your [[Seek Discomfort|comfort zone]]. 
> 
> Here's a *(non-exhaustive)* list of some of the project I've worked on:

## Personalised Radio Station *(BBC Radio4(U))*
#### TLDR:
A radio station (with visualisation!) that takes your news feed, has *two* hosts dynamically talk about it. They then introduce the next song and it plays on my Spotify. Once finished, they jump in and discuss the artist / song + mention fun facts. *(Idea -> execution in ~1 day)*.



<video controls poster="thumbnail.png">
  <source src="bbc-demo-vis.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Background:
In 2023, I wrote an [[Essays|essay]] imagining what the future would look like. A key part of it was the world would be personalised to every individual - this includes the radio we listen to. Naturally, I decided to take a Sunday off and build it. Find it [here](https://github.com/theCampel/BBC-Radio-4U/tree/main).

### Biggest Problems - Natural Timing
It took too long for the conversation to start. As well, there was ~3 seconds of silence after each conversational turn. Made listening experience unusable.
- ***2 Part Solution:*** 
	- ***A)*** Streamed audio instead of loaded and downloaded. (pretty obvious lol). Made the initial starting delay much more tolerable.
	- ***B) Multi-Threaded conversation generation:*** 
		- There were 2 threads: An *audio player* and a audio *generator thread*. 
		- The audio generator thread would create and stream audio into a queue (in order of conversational turns)
		- The moment the first item in the queue was *not empty*, the player would begin to play it. 
			- *Note: The first dialogue didn't need to be* fully *generated, just the first couple of bytes, as the generator would continue to stream into it as it played.*
		- The moment the player was done with a turn, it would immediately start playing the next item (conversational turn) in the queue. 
		- So long as the generator would generate audio faster than audio played, a seem-less conversation transpired.

- ***Problem 2; Visualisation:*** So I originally finished it and recorded it for my site, and realised it was so pointless without something to at least look at. The visualisation that followed drove me to insanity. I basically actually learned about [[Sound|sounds]] and got a better understanding for physical waves. 

Problem 2 was time the constraint. I challenged myself to do this in a single day. It was fun and really rewarding.

### Extensions:
- *Remove Junk Articles:* Too many articles from *The Verge*, *Wired* etc. were advertising related *(Eg best deals to get on Black Friday)*. Ideally, [[Large Language Models (LLMs)|BERT]] could be used to detect salesy-like titles and filter them out. 
	- *Note: According to someone at JPMorgan, BERT would perform better than traditional [[Natural Language Processing|NLP]] by ~10%.*
- Reduce the waiting period between article selection and conversation begins. There's a couple of (unoptimised) processes between these, so shouldn't be too difficult. 
	- Slight problem is I want to add more complexity there. There's a tradeoff with `more stuff x speed`. *(EG: even a small BERT would cause delays).* Maybe preload the initial bit of conversation, eg introduction etc?)
- Currently, song selection is random (from my top 10 songs). Ideally, the user has some sort of preference over this. 

> [!todo] TODO
> Something
> - Add video demo
> - Follow through with Bert extension - would give more experience with local models + finetuning.

## [[EdinburghAI]]
### What:
Not quite a coding project, but definitely one of the harder (and most rewarding) things I've done at [[University of Edinburgh|Uni]]. We made a space where people could meet others also interested in Machine Learning, as well as gave them excuses to build cool shit that utilised [[AI]]. More info on the [[EdinburghAI|page]].

### Biggest Learnings:
- ***Time Commitment:*** Running a society (well) is incredibly time-intensive. It's hard to do that, do well in your degree and save time for [[Work-Life Balance|your friends]] (and yourself of course). 
	- ***Solutions:*** I was forced to [[Learning|learn]] how to be more [[Productivity|efficient with my time]]. 
- ***Leading:*** I learned I love being surrounded by cracked people, all hyper-focused on a specific (albeit lofty) goal. I walk away from committee meetings hyper-energised. Specific learnings below, abbreviated version of [[Lessons From EdiAI|here]]
	- ***Lofty work and autonomy motivates people:*** Remind people that they're a part of something great *(in our case, the AI society of one of the best schools in the world)* and that they can do anything *(Eg: nothing stopping us from getting DeepMind in to give a talk*).  
	- ***Work visibly hard:*** This is obvious. The rest of the team should be equally invested, but if someone can't do something (non-technical obviously), the onus should fall on the leader to pick up the slack. They should know they're supported and not alone. *That said*, they should be invested to work through it even when it is hard.
	- ***Give people autonomy:*** Give genuinely important (and difficult) tasks to competent people. Give them resources and motivation (through lofty goals). Don't just pawn off stuff you don't want to do. Check in frequently, but leave it as theirs. Give them credit every step of the way. 
	- ***Quality of committee > Quantity of committee***. A small team of highly capable and motivated individuals will do ***far*** more work than a large team of half-assed half-interested people. 


> [!todo] TODO
> - Make Sem2 workshops
> - Find Sem2 speakers


> [!TODO] For Rest of Personal Projects Page:
> Add the rest of your personal projects:
> - ABUR
> - Formula Student SLICC

## Project's To Make:

#### AutoNote Maker:
***Background:***
- There's lots of stuff I already know and so rarely find a need to make a note for it. Making a note is not intuitive. It includes:
	- Being able to break the concept down into [[First Principals]].
	- Knowing all of the pages you currently have and linking to them when necessary. 
	- Following a similar style to all of your previous notes. 

***How I'd Imagine Doing It:***
- It would prob first get all of my notes and vectorise them. I now have a searchable [[Vector Embeddings|vector DB]]. 
- I create an outline (~3 sentences) of what the topic is all about. 
- I vectorise it and search through my DB and pick the most relevant / nearby notes and extract their text.
- I take all of that, plug it into a heavily prompt engineered LLMs. 
- And... Vóila?
- Ideally it was local for privacy. But the model sounds like it would need to be quite smart. Not entirely sure, would become clear with testing. 
- Also you yourself have to define what is a good note? Maybe find / make an example? 





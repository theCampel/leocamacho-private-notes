---
quickshare-date: 2024-08-10 14:50:02
quickshare-url: "https://noteshare.space/note/clzo70mpo1956001mw2oaww70t#g0F3sXwDz9+eUDGjMWrD/cc6RD+kJtUcxFoixfUkgWY"
---
> [!example] 
> During my internship at JP Morgan, I dove into the world of AI agents. [[AI|AI Models]] are not reliable enough today to be deployed at scale and work for their creators, but they're making progress. Assuming the actual models were smart enough, what does that unlock? What fundamentally new paradigms are available? What's the infrastructure required to bridge smart models and operating in the world?
> 
> I brought this idea to [[Entrepreneur First]], where I got offered to be a cofounder (by one of the cohort) for this very idea. I turned it down because I wanted to finish Uni first. There'll always be another idea. 

## Background:
Every major technology we use has equally impressive infrastructure enabling it to exist. This infrastructure tends to get setup as that technological wave is arriving. 
##### Case Studies:
In 1996, Larry Page and Sergey Brin recognised that the world's information was unnecessarily cluttered. They had the foresight to realise that as more information came online, the ability to easily search and traverse it was of utmost importance. So they developed the infrastructure to do so. ([source](https://about.google/intl/ALL_uk/our-story/))

In 2006, Amazon had the foresight to predict that the demand for compute power, storage, memory etc. was only going to grow. They realised if they handled and developed the infrastructure, they'd both supercharge developers (by taking the complexity off of their hands), but also make a killing doing so. ([source](https://digitalcloud.training/a-brief-history-of-aws-and-how-computing-has-changed/)).

##### Today's Landscape:
In terms of AI, we've been on a steady linear acceleration for years now ([source](https://time.com/6300942/ai-progress-charts/)). It's commonly believed that in the future, Action Models will perform many tasks in service of humans. ([source](https://www.gartner.com/en/newsroom/press-releases/2024-03-11-gartner-predicts-one-third-of-interactions-with-genai-services-will-use-action-models-and-autonomous-agents-for-task-completion-by-2028)). This isn't hard to intuit either. 

When GPT-3.5 first came out, one could ask it a complicated request with specific, niche criteria. While it would get the spirit of the request, it would often fail on the minor details. For example, when it first came out, I asked for a workout plan for Mondays, Wednesdays, Fridays and Sundays. It needed to have alternating muscle groups on specific weeks and it had to output all of this in a table format. It would often get the spirit of the request correct, but fail on specifics like having it in a table format or correctly following the muscle group detail.

With GPT-4o, it has rarely failed. Additionally, it has learned the ability to use Python Interpreter as a tool, so if I asked it to calculate calories burned, it could. Extrapolating the trend of models getting smarter and getting better at following instructions, we get the prediction by Gartner above (as well as my personal one on my [GitHub](https://github.com/theCampel/TimeCapsule)). 

I also make a longer-term prediction: We're entering a world where everyone has an AI assistant, AI teacher and each business has an AI representative ([source](https://qz.com/mark-zuckerberg-jensen-huang-meta-nvidia-ai-assistants-1851608544), [source](https://www.gatesnotes.com/AI-agents), [source](https://danielmiessler.com/p/ai-predictable-path-7-components-2024)). This will be made possible because of models' improved ability to follow hyper-specific instructions and use tools. 

##### Predicted Future:
I predict that a potential future workflow would be as follows:

**My Request:** *I want to go see my sister (who lives in Manchester) before the end of the month. It's been an expensive few weeks, so I want to spend maximum £150 round trip. Ideally I'd take the train, but I'm not that fussed. Also she recently texted about a Mexican restaurant that seemed good, so make a reservation there. Also I assume she'll let me sleep on her couch.*

**In The Backend:** The agent would have to do the following:
- Reach out to my sister's AI assistant
	- See the dates and times she's free
	- Check my calendar for dates we're both free
- Reach out to TrainLine
	- Check prices of trains on the dates we're both free
	- Verify that does not break the budget
- Reach out to RyanAir (if TrainLine broke the budget)
	- Check prices and budget again
- Check my texts for the link to the Mexican restaurant she sent
	- Reach out to the restaurant's assistant / booking API to make a reservation. 
- Make a single coherent itinerary

**I Receive:**
- A phone notification with the proposed itinerary, which includes:
	- The RyanAir flights (and the prices of trains - showing they were too expensive)
	- Restaurant booking confirmation
	- The price breakdown of the trip
	- My default payment details to use for the trip
- An option to confirm as is, deny as is, or request changes.
	- For example, I could request that it book the train option it showed me, regardless that it's out of budget.

### The Idea:
**I want to build the infrastructure that enables the above**. This encompasses: 
- The channel for agents to communicate with each other.
- The platform that allows easy, simple human oversight ()
- (Potentially) A marketplace for individuals and businesses alike to choose an their assistant of choice (ie a Llama/OAI/Anthropic/Inflection one - each can be fine-tuned by local community members).

## How would it work?
### But First, Some Definitions:
- **User:** This is the end, human user. The individual people who employ assistants to help them complete a wide variety of tasks. 
- **Business:** Pretty self-explanatory, but basically the entities who employ assistants for the following:
	- Act as a representative (answer business questions, make bookings, etc.)
	- Handling business functions (Proposing stock orders, recommending a chaser email to suppliers, etc.)
	- And more I can't think of at the moment lol.
- **Assistant:** A model (or network models) designed to take a task, break it down into sub-tasks and complete those in a human-like workflow. TODO: *Document the areas of further complexity*. 
- **Court:** The (definitely temporary) name for the channel of communication between different assistants. 
- **API:** Not API in the traditional sense. I envision the future to have (conceptually) two internets. One for humans, and one for Assistants. The one for Assistants is like the following:
	- **Note:** *The bot-first internet will still be readable by humans, just it will primarily be designed for bots.*
	- Every business has assistant-readable endpoints, that assistants can query and get useful information from. For example, a bike store may have the following:
		- */opening-hours*
		- */make-reservation*
		- */check-stock* - allows a bot to query if the shop has a specific item in stock.
		- */order* - so that your assistant can order things for you.
	- Humans alike will also have an API that assistants can query. These can include 
		- **Note:** *I'm less confident about this emerging. Also, if it were, it would have to be more restricted / require authorisation.*
		- */contact*
		- */cv*

 
### Closed Source And Centralised:
##### Communication (Through Court):
I propose:
1. The models are told to visit a specific website
2. This website provides them with a specific list of instructions on how to operate. This process can include:
	1. A preliminary authentication handshake/exchange
	2. A structured query for the exact desire of the User. This includes:
		1. Overarching goal
		2. Specific, interim steps to reach that
		3. People, businesses etc. to contact.
### Things to think about:
- Security
	- Authentication? How do you verify that there's a real human behind it?
		- If you want to communicate behind the platform, would the platform be the authenticator? Avoids millions of bots being able to randomly contact a business - ie. ddos? 

### People to Consider:
There's lots of people that have vested interests in having this work well:
- **Google:** Google built the infrastructure that allows the worlds information to be easily accessed. This is the next evolution for that.
- **HuggingFace:** They (currently) want everything, but mainly to democratise the world's access to AI. By taking this platform and building it out, they're continuing on their mission.
- **Facebook:** Their Facebook For Businesses is a key part of their business model. It allows businesses to easily operate in the modern world. This is simply an extension of that model. 



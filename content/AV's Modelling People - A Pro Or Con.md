## Current Draft of Slides:
### Intro + First Slide:

-   **Intro**: What’s the number one thing holding Autonomous vehicles back from SAE Level 4/5? Well according to top Waymo engineer, Anthony Levandowski, it’s model prediction.

- **Slide 1**: To see why, I invite you to a thought experiment. You’re driving down a quiet road past an edlerly couple on a bench. You drive like normal. You’re now driving down the same road but 2 schoolkids playing with a football are at the same spot. This time, you slow down and take a step aside.

- Why did you do this? Well because you’ve learned an intuitive sense of what people will do around you, and in turn the best way to react. Since AV’s can’t, we have to teach them

### 2nd Slide:

- And that’s what we’ve done. However unfortunately, many of the models aren’t the most in depth. The majority simply take “pedestrian… near road”, plug that into a neural network and tend slow down. There’s rarely the distinction between the kids and elderly couple.

### 3rd Slide:

-   The natural step is to understand more about a pedestrian’s or driver’s personality, and in turn decide how to act. This would theoretically lead to more sociable and safer driving.
-   The question to ask however, is do we actually want this?

### 4th Slide:

-   We know that machine learning algorithms are incredibly succeptible to becoming biased, with this 2019 study finding AV’s are less likely to recognise, and in turn more likely to crash into, people with darker skin tones.
-   Now consider what AV’s take in as input. With cameras, you take in age, gender, race. With GPS you take neighbourhood, or a proxy for income. Without proper car and supervision, they’re the perfect vehicle for learning our inherent inequality.

### Slide 4:

-   Self driving cars that will consistently perform worse for certain demographics presents a huge problem to the future of AVs. If we want to deploy AV’s across the world, we can’t just be content with it working well in a fairly homogeneous environment if it operates unsafely in my homeland of Mexico, or in Matt, the next speaker’s, homeland of South Africa.
-   As I alluded to before, all of this highlights the need for rigorous testing and functional safety.




## Cruise Feedback:
We had weekly meetings with [[Cruise]] and they gave us some really insightful feedback:
- Consider [[MAYA]] and [[The Adjascent Possible]]
- Focus on narrative. Have a central narrative that you weave from back and forth. The narrative can change as you go, that's ok. 
- [ ] Find a way to better jump between yours' and Matt's presentations


Matt Feedback:
- The Tech simply won't work in other places
- Weave in the idea of data
- Read up on the topic
- What are the bottlenecks
- Talk about Data driven models and the inherent difficulties / strengths with using Dat
- Change your presentation to be more about do we want cars to take on our inherent biases

## Second Draft: With refocus
### 1st Slide:
- **Intro**: What’s the number one thing holding Autonomous vehicles back from true autonomy? Well according to top Waymo engineer, Anthony Levandowski, it’s model prediction.

- That is - giving Autonomous vehicles the inherently human ability to see another human and predict what they're going to do. 
- Think for a moment, at how differently you'd react when driving down a road and you see an elderly couple vs driving down that same road and you see some young kids playing with a football dangerously close to the curb. 

### 2nd Slide:
- The goal, therefore, is to teach autonomous vehicles those same innate human abilities. And the means to do that? As with every single data driven models - simple. It's data. So that's what we've done.

- Between Waymo, Cruise, and Tesla vehicles have collectively driven *billions* of miles with *human* drivers. The companies then use that, essentially human annotated data, to train their Deep Neural Networks that will eventually be driving the car itself.

### 3rd Slide:
- What's more, research shows that by analysing the *people* and their personalities, around you, the car is even better able to predict how other people are going to react. 
- The question is however, do we even want this?

### 4th Slide:
- We know that machine learning algorithms are incredibly susceptible to becoming biased, with this 2019 study finding AV’s are less likely to recognise, and in turn more likely to crash into, people with darker skin tones.
- Now consider what AV’s take in as their input. With cameras, you take in age, gender, race. With GPS you take neighbourhood, or a proxy for income. Without proper car and supervision, they’re the perfect vehicle for learning our inherent inequality.

### 5th Slide:
- OK. So we know part of the problem is that because these cars are trained off human data, they inherently pick up our human biases. Do we want AV's to slow down cautiously when it enters a neighbourhood of low income?
- The second problem we will have to contend with is the inherent inequality of availability of data. That is to say, AV's will perform great in the data rich, homogenous 


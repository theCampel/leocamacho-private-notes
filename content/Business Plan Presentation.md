---
quickshare-date: 2023-05-12 16:00:03
quickshare-url: "https://noteshare.space/note/clhkoq8av913001pjf0n01zoo#Zh5NEp7VQEnLpd516S2V/hiiaGO5jPjXE0meaQZ6jy0"
---
> [!Brief] Brief
> FS-AI teams must assume that they have been approached to tender for an AI system which is to go into production within 24 months. The AI system is for a new Autonomous Driving System Vehicle which operates at SAE level 4 in a city centre environment moving people from the outskirts of the city centre into the heart of the city centre on defined route

We originally came up with Movar, described below:
> [!green] Movar Description
 A business plan presentation for [[Statics]] where you have to come up with a suitable business plan and pitch it to potential investors. 
 The business plan has to be centered around an *autonomous system* that transports  people from the outskirts of [[Edinburgh]] to the city center. 

### Where it started:
It started as a "time-share" for your car. You got to own a luxury vehicle for certain times of the day. You would select when you want the car at your disposal and at those times the car would just... show up. Then you'd hop in and automatically your [[Spotify]] would start playing, your climate preference would apply and calendar would be brought up. 

From there, you'd choose on the app where (of your favourite locations) you'd like to go. And voilá! Your car would automatically drive yourself to that location. 

### Changes Needed:
Unfortunately, we found it quite hard to find a decent target market for this. As a result, we changed it to be for... **Buses**!! 

### Bovar Script (Software bit):
#### Inputs Slide:
- So here's a simplified version of how our software operates
- We take a range of data from our various sensors around the bus, as well as the predfined route chosen by operators.

#### Perception Slide:
- We feed these inputs into a neural net architecture that provides the backbone for a variety of other actions related to perception and understanding what's around the car. 
- Many of these functions are heavily interconnected and recurrent. On the vision side,  our segmentation, object detection and sensor fusion algorithms are heavily interdependent, allowing us quick visualisation of what's actually going on around the car.
- On the localisation side, we use [[SLAM]] to constantly have updated maps of the world around us, as well as to better orientate the car within it's surroundings.

#### Planning & Control Slide:
- This section of our stack is responsible for creating and evaluating the best path forward for making progress on the road. 
- We do this with a variety of functions. Based on hard coded rules we have, like follow the speed limits, direct obstacles etc, we plan routes progressing the road. We evaluate these routes and assess these risks on a variety of factors. 
- Once we have the route planned, we evaluate the path, factoring risk, inherant uncertainty, and  latency. 
- We then determine determine the controls for the actuator which...

#### Actuator Slide:
- ... Then gets fed into the actually controlling the actuators. 



### Hardware Brainstorming Specifically for BPP:
[[Sensors for AV's]]
- [[Lidar]]?
	- What do we need?
	- 5 Lidar per bus
	- We're long distance, transport poverty areas focused, primarily focused on west lothian and fife direction. 
	- 5 routes per area (2 areas -> West lothian and Fife council), 5 buses per route. 
- [[Radar]]?
	- 8 radar. 1 each corner 1 each middle? Why because we said so. Imogen was right :( ... Maybe next time check your notes leo you muppet. 
	- Delphi ESR
- [[Ultrasonic Sensors]]:
	- Not needed - Exec decision by Imogen!
- [[Cameras]]:
	- Triton 5.4 MP. They've already been used on buses. 

### [[Software for AVs|Software:]]




## Cruise Feedback:
The entire feedback can be found [[Cruise Feedback|here]]. It boils down the below. 
### Things to refine / improve:
- Costings. You must consider all other types of costs. These include:
	- NRE, maintenence, testing, cleaning, customer support, telemtry etc.
	- Mounting is too low. More like 5-10K. 
	- 20k for computer is too much. More like 10k.
- Hammer home the idea we're solving transport poverty. Better justifcation for using buses. 
	- Ask ourselves, what problem are we solving by choosing buses? Are we actually improving sustainability?
- Have a 2-3 year plan with ***justifcation*** - in fact, have justification for everything. Remember to utilise handout. 

### Things to add:
- How many people people we plan to serve within a time frame
- Using that and the cost of operating, calculate expected revenue + business model.
- Growth over time
	- How can we reduce sensors over time
	- Fleet growth over time
- (According to Cruise) Be upfront with investors about challenges. 
- Justification for having an electric bus / change to a hydrogen bus. 
- Local council / governance. 
- Include a map on transport links page. 
- Define the exact size of the bus

### Things to remove:
- Do not 3D print stuff
- Reduce the amount on Software :(
- Condense Sensors to a single slide

### Outstanding Questions for Cruise:
- Is our current sensor setup unreasonable? (Show include slides / screenshots / descriptions)
	- Do we have too many Lidars / Radar?
- What role does a production / assembly line look like for AV's
	- This is something I'd like to have a sitdown with Grace over the clarification of the rules
- (Imo's) Once we flesh out the finances, can we get a sanity check on the numbers? 
[[Exact Questions for Cruise]]



#### Grace's Homework:
- A list of everything that specifically needs to change, any structure
- Also anything we need anything that


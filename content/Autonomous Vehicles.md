---
aliases:
  - self-driving cars
---
> [!done] Personal Background
> I've always had a huge interest in Tesla and Waymo - they're mostly what inspired me to join [[EUFS]]. 

## Objective & Background:
- Automate vehicle operation to reduce human intervention while ensuring **safety**, **efficiency**, and **accessibility**. 
- Leverage advanced [[Sensors for AV's|sensors]] and algorithms to mimic human driving capabilities while minimising human error. (***Reliability***)

### Levels of Autonomy:
- **L0**: No autonomy. Driver handles everything. (Think old Porches without power steering)
- **L1**: Assistive functions like speed-keeping or lane-keeping (think *helpers*).
- **L2**: Partial automation. The car can handle steering and acceleration but needs the driver alert at all times. (*Tesla Autopilot-ish*)
- **L3**: Conditional automation. The car drives itself under specific conditions but can demand the driver to take over.
- **L4**: High automation. Fully autonomous in limited settings (e.g., urban centres).
- **L5**: Full automation. No steering wheel. No driver. 

### How It Works:
1. 🟥 **Perception**: Sensors like [[LiDAR]], cameras, and radar gather data about the car's surroundings.
   - Example: Detecting a pedestrian in a crosswalk.
2. 🟧 **Localisation**: Using GPS and [[SLAM]] to pinpoint the car’s position on the map.
3. 🟨 **Prediction**: Machine learning algorithms predict the motion of surrounding vehicles, pedestrians, etc.
   - e.g., *That cyclist will likely swerve left*.
4. 🟩 **Planning**: Develop the safest and most efficient driving path based on predictions and static maps.
   - e.g., *Slow down for the cyclist*.
5. 🟦 **Control**: Adjust acceleration, braking, and steering to execute the plan.
   - Big up [[Neural Networks]]

> [!hint] Interestingly 🤔
> Those are the exact sub-teams of [[EUFS|Formula Student]]. 

### Hacking Risks:
- ***Cars get hacked:*** Self-driving cars introduce some novel hacking risks. Imagine driving down the road and your car just starts going on it's [own merry way](https://www.youtube.com/watch?v=MK0SrxBC1xs). At the end of the day they're [[💻 Computer Science|computers]] on wheels. This brings on the same [[Computer Security|computer vulnerabilities]]  we've seen over and over again. 
- ***People try fuck with the roads:*** [[Computer Vision]] is vulnerable to statistics. What if people put mathematically specific pieces of tape [on stop signs](https://globalnews.ca/news/3654164/altered-stop-signs-fool-self-driving_cars/)? Then they're be perceived as *"Go straight on"*  


There's a shit ton to solve.

[[SLAM]]

Ok so there's mutliple bits:
The [[Sensors for AV's|Sensors]] feed into "sophisticated software", plots a path, sends instructions to cars actuators and drives.

There's hardcoded rules of the road it must follow. These take precedent over anything else the NNs may conclude. 
- Obstacle avoidance
- Predictive Modelling
- Object Recognition (for stop signs, traffic lights etc.)


> [!note] Note:
> This is a highly simplified explanation for demo purposes. In reality, it wouldn't actually run sequentially. It would run concurrently, with the outputs of some being used as inputs for others.


Simplified Version of how it goes:
1. User Interface Layer
	- Dashboard Display: Shows the user relevant information such as vehicle status, route planning, and traffic conditions.
	- Voice Assistant: Allows hands-free control and interaction with the vehicle systems.
2. Middleware Layer
	- API Gateway: Handles communication between the User Interface Layer and the various subsystems in the stack.
	- Data Storage: Manages storage and retrieval of data generated during vehicle operation, such as maps, sensor data, and user preferences.3. Decision Making Layer
3. [[Perception]] & Localization Layer
	- Sensor Fusion: Combines data from multiple sensors such as LiDAR, cameras, radar, and ultrasonic sensors to create a comprehensive view of the vehicle's surroundings.
	- Object Detection and Tracking: Identifies and tracks objects, including other vehicles, pedestrians, cyclists, and obstacles in the vehicle's path.
	-   *Localisation*: Estimates the vehicle's position and orientation within the environment using sensor data and map information.
4. Decision Making
	- Path Planning: Determines the best route to reach the destination using map data and real-time traffic information.
	-   Control Algorithms: Calculates acceleration, braking, and steering commands based on path planning, sensor inputs, and vehicle dynamics.
5. Actuation Layer
	- Vehicle Control Interface: Translates the control commands from the Decision Making Layer into signals for the vehicle's actuators.
	- Vehicle Actuators: Controls the vehicle's throttle, brakes, and steering systems to execute the desired maneuvers.

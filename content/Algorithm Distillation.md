## Initial Problem:
Take [[Dijkstra's Algorithm]]. It's a great algorithm, but due to the nature of the problem, it's really inefficient as the problem (graph size) grows larger. In fact, the [[Time Complexity|time complexity]] is $O(V^2)$, where $V$ is the number of nodes you have. 

## Mind Blowing Part:
What if you trained a [[Neural Network|neural network]] on the inputs and outputs of a bunch of examples (so start point, end point and the path taken). Then (assuming the model [[Learning|learned]] something), you have a model that approximates the best path, but at $O(1)$... 

*Credit to [Oliver Groth](https://www.linkedin.com/in/olivergroth/), who taught me this idea over a pint lol*

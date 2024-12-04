In [[(Machine Learning) Models|ML]], you'll often have data imbalances. For our example, let's consider images ([[Supervised Learning|classifying]] between dogs or cars) and CNNs. You may choose to augment one side by artificially cropping, rotating, blurring etc the image so the classes are now more balanced. 

Why does the model generalise *beyond* the distortions though? Two reasons:
1. In CNNs, they first learn lines, curves, edges etc, and then begin to learn tails, wheels etc. By feeding enough images, distorted or not, they're still learning the basic edges
2. It forbids the model from overfitting, to either the individual category choice or given features in the minority class. (Does it actually?)
### What:
- Parallelising the training data and splitting it up amongst GPU's
- Each GPU computes gradients ([[(Machine Learning) Models|loss]]) independently
- Gradients are averaged to update model
- Allows scaling with multiple GPUs and minimal code changes
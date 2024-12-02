### What:
- Model layers are split across GPU's
- Each GPU processes a portion of the model
- Requires more complex sync code
- Useful for incredibly large models that don't fit on a single GPU
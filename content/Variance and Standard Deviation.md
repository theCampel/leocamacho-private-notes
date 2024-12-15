Similar the ***Standard Deviation***. 

### Variance:
It measures the *spread* of observations with respect to the mean. IE Calculates the average of the squared differences from the mean. 
##### How could you calculate it?
- Find the mean
- Calculate the difference between each item and the mean
- Square the differences
- Get the average of the squared differences
- ${\sigma}^{2} = E[X-{\mu}^{2}]$
##### What about for the sample variance:
- When finding the mean, divide by $n-1$ and not $n$, as this will help 
- Why?
	- Remember the sample variance is often too small when compared than the population bias

### Standard Deviation:
The square root of the variance and provides a measure of the spread of the distribution in the same *units of data*. Gives a sense of the *average distance from the mean*.  

##### Calculate it:
$\sigma =\sqrt{{\sigma}{^2}}$

### Covariance Vs Variance:
- ***Variance:*** The measure of how much the values in the dataset differ from the mean of the data (Are the arrows spread out or tightly packed around the bullseye?)
	- $\sigma^2 = \frac{1}{n-1}\sum_{i=1}^{n} (x_i - \bar{x})^2$
- ***Covariance:*** The measure of how correlated two variables, X and Y, are. (E.G. Collecting the data to see that taller people are heavier - positive covariance). 
	- $\text{Cov}(X, Y) = \frac{1}{n-1}\sum_{i=1}^{n} (X_i - \bar{X})(Y_i - \bar{Y})$

> [!note] What is it?
> A form of model-based [[Prediction Problems|prediction]]. Used for continuous variables, as opposed to [[Classification]] which is for discrete categories. 

### How do you do Linear Regression (and [[Machine Learning]] in general):
1. Specify the model
2. Specify the loss function
3. Minimise the loss
 

### How does it work?
1. We assume x and y are related by: $y = \beta_0 + \beta_1x + \text{noise}$
	- *Note*: This is very similar to the equation of a line. 
2. We optimise the model to be the line with the smallest average distance to all of the lines ($\therefore \text{Loss} \equiv \text{sum of squared prediction errors}$). 
	- In *English*: Square each prediction's distance from the line and add them up. 
	- Mathematically, that looks like: 
	- The ***Loss*** is called ***Quadratic Loss*** or ***Sum of Square Errors***.
	- Note: Squaring the loss penalises overshooting and undershooting as equally bad. 
	- $$
\begin{align}
\text{Prediction:}\quad\hat{y}_i = \beta_0 + \beta_1 x_{i} \\
\text{Error:}\quad e_i = \underbrace{y_i}_{\text{actual}} - \underbrace{\hat{y}_i}_{\text{predicted}}\\
\text{Loss:}\quad f(\beta_0, \beta_1) = \sum_{i=1}^{n} e_i^2
\\
\end{align}
$$
3. Minimise the loss. 


### Example of above:
![[Pasted image 20231228132634.png|500]]

### Optimisation Techniques for Linear Regression
A common way to optimise for the correct $\beta$'s is the following formulae, known as '***Least Squares Estimate***'. 

### Optimal Solutions:
Once you have an optimised line, there's still points that don't go through it (technically still errors). They're known as ***Residuals***. 
- $\hat{e}_i = y_i - (\beta_0 + \beta_1 x_i) = y_i - \bar{y} - \hat{\beta}_1 (x_i - \bar{x})$


> [!info] Smallest Loss Achievable:
> The optimisation here lies in minimising the ***residuals***. Why? Well because if your line is as close to all points not on the line as possible, and no alterations could make them closer, then you've the best fitting model. The formula for that (I.E. The *smallest possible loss*)?: 
> 
> $$\min f(\beta_0, \beta_1) = (n - 1)s_y^2(1 - r^2)$$

##### Dissecting The Formula:
- $n-1$: The number of data points
- $s_y^2$: Variance of target
	- Predicting something that's more variable is *much* harder. Thus as the variability increases, smallest possible loss also increases. 
- $1-r^2$: Regression Co-efficient. 
	- If $r=1$, $x$ is perfectly correlated with $y$. If $r=0$, $x$ is perfectly non-correlated with $y$
	- Loss decreases as 
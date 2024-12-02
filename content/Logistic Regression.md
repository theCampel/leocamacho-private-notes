### What?
As opposed to [[Simple Linear Regression|Linear Regression]] - which predicts real values - Logistic Regression is all about predicting binary response variables. Often they predict [[Odds and Log Odds]]. 

### How?
Take the following example:
- $\hat{\beta}_{0}= 1.0$ 
- $\hat{\beta}_{1}= 0.5$
- $\hat{\beta}_{2}= -0.5$
- $\hat{\beta}_{3}= 0.1$
- $x^{(1)}$ Number of occurrences of phrase "world-beating"
- $x^{(2)}$ Number of occurrences of phrase "confidence interval"
- $x^{(3)}$ Number of occurrences of phrase "bootstrap"
- $y$ Whether the paper was rejected (1) or sent out for review (0).
- ***Question:*** *Suppose a paper contains the phrase “world-beating” 5 times, and 0 occurrences of “confidence interval” or “bootstrap”. What is the predicted probability of rejection?*
###### Solution:
To calculate the predicted probability of rejection for a paper with 5 occurrences of "world-beating" and 0 occurrences of "confidence interval" and "bootstrap", we use the logistic regression coefficients and the following formula:

Log-odds = $\hat{\beta}_0 + \hat{\beta}_1 \cdot x_1 + \hat{\beta}_2 \cdot x_2 + \hat{\beta}_3 \cdot x_3$

Here, $x_1$ is the number of occurrences of "world-beating", $x_2$ is the number of occurrences of "confidence interval", and $x_3$ is the number of occurrences of "bootstrap". Given the coefficients $\hat{\beta}_0 = 1.0$, $\hat{\beta}_1 = 0.5$, $\hat{\beta}_2 = -0.5$, and $\hat{\beta}_3 = -0.1$, and the occurrences $x_1 = 5$, $x_2 = 0$, and $x_3 = 0$, the log-odds are:

Log-odds = $1.0 + (0.5 \cdot 5) + (-0.5 \cdot 0) + (-0.1 \cdot 0)$

Log-odds = $1.0 + 2.5$

Log-odds = $3.5$

To convert the log-odds to a probability, we use the logistic function:

$P(\text{rejection}) = \frac{e^{\text{Log-odds}}}{1+e^{\text{Log-odds}}}$

Plugging in the log-odds we calculated:

$P(\text{rejection}) = \frac{e^{3.5}}{1+e^{3.5}}$
> [!danger] Note:
> Detailed information can be found in *13.1* [here](https://opencourse.inf.ed.ac.uk/sites/default/files/2023-11/FDS-lecture-notes-2023-11-27.pdf). It's helpful and is more robust on the maths. 
### What's PCA all about?
High-dimensional data is a balls and often it could be condensed (think data that has columns *Height* and *Shoe Size*). Solution? Reduce the different dimensions to purely the dimensions that tell different and unique stories about the data. These new dimensions are the ***Principal Components***.

> [!summary] ChatGPT Analogy
> Imagine you have a large 3D file of a building and you want to reduce the size of it while keeping as much information as possible. You could take 5 still images of the building (1 each side and 1 of roof). You've condensed the file size but kept the crucial information from the unique principal components. 

### How do you do it?
###### High Level:
1. Your first principal component is the one with the highest variance.
2. Your next is one that orthogonal to that one. 
3. Keep going until you've all...

### Example:
![[Screenshot 2024-01-14 at 5.39.20 p.m..png|500]]

The above is a scatter plot for the 2 principal components, `PC1` and `PC2` of data referring to Scotland's secondary schools, their students and the towns of which they're in. You can see the vectors orthogonal to `PC2` are all to do with `Area Deprivation`. Whereas to `PC21 it's all about `Distance from School`. 

### The Maths Behind the Graph 😱:
- The ***Principal Component Scores*** represent the new datapoints after they've been conformed to your new PCs. Mathematically: $$\begin{align}
t_{i1} &= p_{11}z_{i1} + p_{21}z_{i2} + \ldots + p_{D1}z_{iD} \\
t_{i2} &= p_{12}z_{i1} + p_{22}z_{i2} + \ldots + p_{D2}z_{iD}
\end{align}
$$
	***Explanation***:
	- $t_{i1}$ and $t_{i2}$ are the ***new coords*** for the original data points, now conformed to *PC1* and *PC2* respectively.
	- $z_{iD}$ are the ***variables***, where $i$ is the $i$th datapoint and $D$ is the $D$th variable. (Variable representing *Attendance*, *Unemployment* etc.)
	- $p_{11}$ and $p_{12}$ are the ***weights*** each new variable has on the new coord. 

- What about the ***Original Vectors*** (*Attendance*, *Unemployment* etc)?:
	- Check the page above lol.

### Their Usefulness:
Remember, PCs explain portions of the variance in the data. You can graph it as such. **Rule of thumb**: only use the PC's to the *left of the elbow* 
![[Screenshot 2024-01-15 at 12.32.37 p.m..png|600]]




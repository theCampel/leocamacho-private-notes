### Concept:
Imagine you had a function $f(x)=\sqrt{x}$, with domain $[0,3]$. Visualise that. Now, imagine the lower end is stuck on a swivel and you pluck the top end and rotate it around the x-axis, leaving a wall as it passes. The solid you just created is a ***solid of revolution***. 

### Finding A(x)
Now the fun part. How do you calculate the volume of it? First, what's the $A(x)$ (*the area*) of a cross section of the shape? Well, it's a circle, the radius is $\sqrt{x}$. $\therefore A(x)=\pi(\sqrt{x})^{2}=\pi x$.

![[Screenshot 2023-08-05 at 11.40.06 a.m..png]]

### Finding Volume:
Using [[Volume by Slicing]], we can pretty easily find it now. Just integrate, plugging in $A(x)$ instead of just $x$. 

### What about harder shapes?
Well most of the time you won't get something as simple as a single function around the x-axis (which gives you a nice and convenient cross sectional area). Instead, you'll more often be asked to calculate the volume of a solid that was created from revolution of the area enclosed by 2 functions (take $f(x)=x$ and $g(x)=x^2$. This looks like the below. The area enclosed is called a washer:
![[Screenshot 2023-08-05 at 12.07.16 p.m..png]]

Thus the formula for the **Cross Sectional Area** (applied to the question from screenshot):  $A(x)=\pi r_{outer}^{2} - \pi r_{inner}^{2} = \pi(x)^{2}-\pi((x)^{2})^{2}=\pi(x^2-x^4)$



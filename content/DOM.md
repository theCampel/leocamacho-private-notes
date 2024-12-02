## What?
***Document Object Model:*** 
- A way of coding for web documents. 
- Represents HTML or XML as a [[Context-Free Language|tree]] of objects. 
- Can simply add something to the list without having to reload everything. 

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```
Turns to:
```less
html
 ├── head
 │    └── title ("My Page")
 └── body
      ├── h1 ("Hello, World!")
      └── p ("This is a paragraph.")

```


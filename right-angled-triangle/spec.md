# 📐 Draw right angled triangle

## Problem statement

In programming, we often need to create visual patterns using text characters. One common shape is a right-angled triangle. This triangle is characterized by having one 90-degree angle, with the right angle positioned at the bottom-left corner when drawn with text characters. The challenge is to create a function that can draw such a triangle of any size, using a simple character like 'x' to form the shape.

## Expected behaviour

Let's say we're implementing a function called `drawRightAngledTriangle` to satisfy the problem statement.

The function should have one parameter:

- An integer `n` representing the height of the triangle (which will also be the length of the base)

The function should print the triangle to the console, with each line representing a row of the triangle. The triangle should have the following characteristics:

- The first row should have one 'x'
- Each subsequent row should have one more 'x' than the previous row
- The last row should have 'n' number of 'x' characters
- The right angle of the triangle should be at the bottom-left corner

The function should work for any positive integer input, allowing for triangles of various sizes to be drawn.

 We expect `drawRightAngledTriangle` to behave in the following way:

```js
drawRightAngledTriangle(3) // should print:
```
x
xx
xxx

```js
drawRightAngledTriangle(5) // should print:
```
x
xx
xxx
xxxx
xxxxx

```js
drawRightAngledTriangle(1) // should print:
x
```

drawRightAngledTriangle(4) // should print:
x
xx
xxx
xxxx


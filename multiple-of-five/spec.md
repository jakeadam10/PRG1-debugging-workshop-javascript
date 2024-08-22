# 🧮 Is multiple of 5?

## Problem statement

In many programming scenarios, we need to determine if a number is divisible by another number without a remainder. A common case is checking if a number is a multiple of 5, which has various applications in mathematics and real-world problems. For example, this could be useful in problems involving currency (where the smallest unit is 5 cents), or in creating patterns or groupings based on multiples of 5. We need a function that can quickly and accurately determine whether a given integer is a multiple of 5.

## Expected behaviour

The function should take one parameter:

- An integer (positive, negative, or zero)

The function should return:

- `true` if the input number is a multiple of 5 (i.e., divisible by 5 without a remainder)
- `false` if the input number is not a multiple of 5

Let's say we're implementing a function called `isMultipleOfFive`. We expect `isMultipleOfFive` to behave in the following way:

```js
isMultipleOfFive(0) // should return true
isMultipleOfFive(5) // should return true
isMultipleOfFive(10) // should return true
isMultipleOfFive(15) // should return true
isMultipleOfFive(100) // should return true
isMultipleOfFive(101) // should return false
isMultipleOfFive(-7) // should return false
```


The function should work for any integer input, including positive numbers, negative numbers, and zero. It should correctly identify multiples of 5 regardless of whether they are positive or negative.
# 💯 Calculate percentage change

## Problem statement

In many real-world scenarios, we need to understand how a value has changed relative to its original amount. This change is often expressed as a percentage. For example, if a stock price goes from $100 to $120, we might say it increased by 20%. We need a way to calculate this percentage change between two values, whether it's an increase or a decrease.

## Expected behaviour

Let's say we're implementing a function called `calculatePercentageChange`. The function `calculatePercentageChange` should take two parameters: the original value and the new value. It should return the percentage change as a number (positive for increases, negative for decreases), not including the percentage symbol. The result should be rounded to the nearest whole number.


We expect `calculatePercentageChange` to behave in the following way:

```js
calculatePercentageChange(100, 120) // should return 20 (because it's a 20% increase)
calculatePercentageChange(50, 40) // should return -20 (because it's a 20% decrease)
calculatePercentageChange(200, 200) // should return 0 (because there's no change)
calculatePercentageChange(100, 150) // should return 50 (because it's a 50% increase)
```


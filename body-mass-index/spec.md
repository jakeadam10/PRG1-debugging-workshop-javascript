# ⚖️ Calculate BMI (**B**ody **M**ass **I**ndex)

## Problem statement

Body Mass Index (BMI) is a simple measure that uses your height and weight to work out if your weight is healthy. The BMI is an attempt to quantify the amount of tissue mass (muscle, fat, and bone) in an individual, and then categorize that person as underweight, normal weight, overweight, or obese based on that value. However, it's important to remember that BMI is not a perfect measure because it does not account for body composition. We need a way to calculate a person's BMI given their weight and height.

## 📋 Function Specification

We're going to implement a function called `calculateBMI` to solve this problem statement. The function should work for any valid weight and height inputs, assuming weight is in kilograms and height is in meters.

### Expected Behaviour

The function should:

1. Take the person's weight in kilograms and height in meters as input
2. Calculate the BMI using the formula: BMI = weight / (height \* height)
3. Round the result to two decimal places
4. Return the calculated BMI as a number

## Function Signature

```javascript
function calculateBMI(weight, height)
```

### Parameters

- `weight` (number): The person's weight in kilograms
- `height` (number): The person's height in meters

### Return Value

- (number): The calculated BMI rounded to two decimal places

## Examples

```javascript
calculateBMI(70, 1.75); // should return 22.86
calculateBMI(68, 1.65); // should return 24.98
calculateBMI(100, 1.82); // should return 30.19
```

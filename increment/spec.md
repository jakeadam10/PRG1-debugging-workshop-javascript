# ➕ Increment

## Problem Statement

You are tasked with implementing a function that increases a given number by 1.

## Function Specification

## Expected Behaviour
The function should:

1. Accept a single number as input
2. Add 1 to the input number
3. Return the result of this addition


### Function Signature
```javascript
function increment(num)
```

### Parameters
- `num` (number): The input number to be incremented

### Return Value
- (number): The result of adding 1 to the input number


## Examples
```javascript
increment(5)  // should return 6
increment(-3) // should return -2
increment(0)  // should return 1
increment(99) // should return 100
increment(-1) // should return 0
```

Additional considerations:
- The function should work for any valid number input, including:
  - Positive integers
  - Negative integers
  - Zero
- The function should always return a number that is exactly one more than the input number
- The function should handle edge cases, such as very large numbers or numbers close to the maximum representable value in the programming language being used
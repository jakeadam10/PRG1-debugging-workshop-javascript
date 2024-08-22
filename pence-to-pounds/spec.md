# 🪙 Pence to pounds

## Problem statement

In the United Kingdom and some other countries, the currency is divided into pounds (£) and pence (p), where 100 pence make up one pound. When dealing with financial calculations or displaying prices, it's often necessary to convert an amount given entirely in pence to its equivalent in pounds and pence. This conversion needs to accurately represent the amount with pounds as the whole number part and pence as the decimal part, formatted correctly as currency.

## Expected behaviour

The function should take one parameter:

- An integer representing the amount in pence

The function should return a string that:

- Starts with the pound symbol (£)
- Shows the number of whole pounds
- Uses a decimal point to separate pounds and pence
- Always shows two decimal places for the pence, even if they're zero
- Correctly handles amounts less than one pound

The function should work for any non-negative integer input, allowing for conversion of any amount of pence to pounds.
Let's say we're implementing a function called `convertFromPenceToPounds`. We expect `convertFromPenceToPounds` to behave in the following way:

```js
convertFromPenceToPounds(1299) // should return "£12.99"
convertFromPenceToPounds(700) // should return "£7.00"
convertFromPenceToPounds(50) // should return "£0.50"
convertFromPenceToPounds(2000) // should return "£20.00"
convertFromPenceToPounds(199) // should return "£1.99"
convertFromPenceToPounds(1) // should return "£0.01"
```


# 📜 Text in div

## Problem statement

### Fitting text in a certain space

This problem involves implementing a function that takes two arguments, text and width, and formats the text to fit the width.

## 📋 Function Specification

### Function Signature
```javascript
function textInDiv(str, maxWidth)
```

### Parameters
- `str` (string): The input text to be formatted
- `maxWidth` (number): The maximum width of each line in characters

### Return Value
- (string): The formatted text with line breaks inserted

### Expected Behaviour
The function should:

1. Accept a string of text and a maximum line width as input
2. Split the input text into lines, ensuring that:
   - No line exceeds the specified maximum width
   - Words are not split across lines (break at spaces)
   - Lines are as long as possible within the width constraint (greedy approach)
3. Join the resulting lines with newline characters (\n)
4. Return the formatted text as a single string

## Examples

```js
    textInDiv(str, 30);
    /* -> "Lorem ipsum dolor sit amet,\n
           consectetur adipiscing elit.\n
           Aliquam nec consectetur risus.\n
           Cras vel urna a tellus dapibus\n
           consequat. Duis bibendum\n
           tincidunt viverra. Phasellus\n
           dictum efficitur sem quis\n
           porttitor. Mauris luctus\n
           auctor diam id ultrices.\n
           Praesent laoreet in enim ut\n
           placerat. Praesent a facilisis\n
           turpis."
    */
```
```js
    textInDiv(str, 50);
    /* -> "Lorem ipsum dolor sit amet, consectetur adipiscing\n
           elit. Aliquam nec consectetur risus. Cras vel urna\n
           a tellus dapibus consequat. Duis bibendum\n
           tincidunt viverra. Phasellus dictum efficitur sem\n
           quis porttitor. Mauris luctus auctor diam id\n
           ultrices. Praesent laoreet in enim ut placerat.\n
           Praesent a facilisis turpis."
    */

```


## Additional Considerations
- The function should handle various input lengths, from very short to very long texts
- It should work with different maximum width values
- The function should preserve existing line breaks in the input text
- It should handle edge cases such as very long words that exceed the maximum width
- Proper handling of punctuation at line breaks may be necessary
- The function should trim leading and trailing spaces from each line

## Expected behaviour

Your function should divide the given text into lines using newline characters. It should fit as many words into each line as possible without exceeding the given width or splitting any words between two lines. There should not be a space at the beginning or end of any line. The minimum input for the width is 15. Anything below 15 should return "INVALID INPUT"


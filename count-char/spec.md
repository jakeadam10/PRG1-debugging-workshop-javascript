# 🧮 Count characters

## Problem statement

When working with strings, it's often necessary to count how many times a specific character appears within the text. This operation can be useful in various scenarios, such as analysing text content, validating input, or solving word puzzles. We need a function that can efficiently count the occurrences of a given character in a string, considering both uppercase and lowercase instances of the character as distinct.


## Function Specification

### Function Signature
```javascript
function countChar(str, char)
```

### Parameters
- `str` (string): The string in which to search for the character
- `char` (string): A single character to search for

### Return Value
- (number): An integer representing the number of times the specified character appears in the string

### Expected Behaviour
The function should:

1. Count the occurrences of the specified character in the given string
2. Return the count as an integer
3. Be case-sensitive (treat uppercase and lowercase characters as different)
4. Count all occurrences, including consecutive ones
5. Return 0 if the character is not found or if the string is empty

## Rules
- The function should be case-sensitive
- It should work with any printable character (letters, numbers, special characters)
- It should handle empty strings correctly
- If the character is not found in the string, it should return 0
- It should count all occurrences of the character, even if they are consecutive

## Examples
```javascript
countChar("hello", 'l')                                        // should return 2
countChar("Mississippi", 's')                                  // should return 4
countChar("Mississippi", 'p')                                  // should return 2
countChar("Cassandra", 'a')                                    // should return 3
countChar("Cassandra", 'A')                                    // should return 1
countChar("The quick brown fox jumps over the lazy dog", 'o')  // should return 4
countChar("", 'a')                                             // should return 0
countChar("No matches here", 'z')                              // should return 0
```

## Additional Considerations
- The function should handle strings of any length, including very long strings
- It should be efficient, ideally with a time complexity of O(n) where n is the length of the string
- The function should handle edge cases, such as when the search character is a space or a newline character
- It should work correctly with Unicode characters, if the implementation language supports them
- The function should validate that the second parameter is indeed a single character
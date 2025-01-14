# Unexpected behavior in function with missing or string arguments
This bug demonstrates unexpected behavior in a JavaScript function when called with fewer arguments than expected or with string arguments. The function `foo` is designed to add two numbers, but it does not handle cases where one or both arguments are missing or are strings.

## Bug
The original `foo` function does not perform any type checking and assumes that both arguments are numbers.  This leads to unexpected results:

* When called with only one argument, it returns `NaN` (Not a Number).
* When called with string arguments, it performs string concatenation instead of numerical addition.

## Solution
The solution implements input validation to handle missing or non-numeric arguments. If either argument is not a number, it defaults to 0, ensuring that the function always returns a valid numerical result. 

This solution improves robustness and prevents unexpected behavior.
# Fibonacci Functions

This repository contains two main functions related to the Fibonacci sequence:

1. `generateFibonacciSequence(length: number)`: This function generates a Fibonacci sequence of a given length. The sequence starts with [0, 1] and each subsequent number is the sum of the previous two.

2. `getFibonacciValueAtPosition(position: number)`: This function returns the value at the specified position in the Fibonacci sequence. Position is zero-based, so `getFibonacciValueAtPosition(0)` will return 0, `getFibonacciValueAtPosition(1)` will return 1, and so on.

## Motivation

I created this code to put into practice some of the concepts that I think are very important to guarantee the quality of the code.

1. Creating custom exceptions: It is a great practice for later exception handling
2. Unit tests: Use of the Jest library to test functions in a modular way, ensuring proper functioning in different scenarios
3. Meaningful names: Use of meaningful names that make the code easier to understand

## About the complexity of algorithms

1. generateFibonacciSequence(length: number): This function has a time complexity of O(n), where n is the length of the Fibonacci sequence to be generated. This is because the function iterates once for each number in the sequence. The space complexity is also O(n), as the function stores all the numbers in the sequence in an array.
2. getFibonacciValueAtPosition(position: number): This function has a time complexity of O(n), as it calls the generateFibonacciSequence function with a length of position + 1. The space complexity is also O(n), as the sequence The generated Fibonacci sequence is stored in an array.

## Prerequisites

Before you begin, make sure you have Node.js installed in your development environment. Additionally, you will need to install project dependencies with `npm install` or `yarn install`.

## How to use

First, import the functions from the index file:

```javascript
import { generateFibonacciSequence, getFibonacciValueAtPosition } from "./index";
```

Then you can use the functions in your code. Here are some examples:

```javascript
const sequence = generateFibonacciSequence(10);
console.log(sequence); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const value = getFibonacciValueAtPosition(7);
console.log(value); // 13
```

## Tests

This repository also includes tests for Fibonacci functions. To run the tests, first install the dependencies with `npm install` or `yarn install`, and then run `npm test` or `yarn test`.

## Errors

Functions throw errors when the arguments provided are invalid. For example, if you try to generate a Fibonacci sequence with a negative length, an error will be thrown.

## Contributing

Contributions are welcome! Please feel free to open an issue or pull request if you find a bug or would like to add new functionality.
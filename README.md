# Type Error in TypeScript Addition Function

This repository demonstrates a common type error in TypeScript where a function expecting a number receives a string.  The provided solution involves implementing robust type checking to prevent runtime errors.

## Bug Description

The `add` function is designed to add two numbers, but it is called with a string as the second argument resulting in a runtime type error.  This showcases the importance of rigorous type checking to avoid such errors during development.

## Solution

The `bugSolution.ts` file provides a solution to the error by implementing type checking either by using type assertions or type guards.
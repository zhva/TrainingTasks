# TrainingTasks

## Introduction

This repository contains solutions of the tasks I solved on LeetCode and other interview development tasks. There's also a simple UI created to navigate through the solutions and to test them manually. For each solution there's also set of unit auto-tests

## Technologies

HTML, CSS, Javascript, Chai/Mocha

## Dependencies

The following packages are required to run this page properly. Use [npm](https://www.google.com) to install the packages.
- Gulp
- Mocha/Chai
- JQuery
- VS Code

Configuration files in VS Code for standart launch and testing

`launch.json`
```
  "version": "0.2.0",
  "configurations": [
      {
          "type": "chrome",
          "request": "launch",
          "name": "Run Tests",
          "url": "${workspaceFolder}/TrainingTasks/testRunner.html",
          "webRoot": "${workspaceFolder}",
          "preLaunchTask": "gulp: gulp-training-tasks"
      },
      {
          "type": "chrome",
          "request": "launch",
          "name": "Run Index",
          "url": "${workspaceFolder}/TrainingTasks/index.html",
          "webRoot": "${workspaceFolder}",
          "preLaunchTask": "gulp: gulp-training-tasks"
      }
```

`tasks.json`

```
{
  "version" : "2.0.0",
  "command": "gulp",
  "type": "shell",
  "args": [
      "--no-color"
  ],
  "tasks": [
      {
          "type": "gulp",
          "task": "gulp-training-tasks",
          "group": {
              "kind": "build",
              "isDefault": true
          },
          "presentation": {
              "reveal": "always"
          },
          "problemMatcher": [
              "$eslint-compact"
          ]
      }
  ]
}
```

Also Gulp requers a configuration file outside of the working directory.

`gulpfile.js`

```
var gulp = require('gulp');
var deporder = require('gulp-deporder');
var concat = require('gulp-concat');

gulp.task('gulp-training-tasks', function() {
    return gulp.src(['TrainingTasks/javascript/utils/*.js',
                     'TrainingTasks/javascript/tasks/arrays/*.js',
                     'TrainingTasks/javascript/tasks/numbers/*.js',
                     'TrainingTasks/javascript/tasks/strings/*.js',
                     'TrainingTasks/javascript/tasks/lists/*.js'])
                .pipe(deporder())
                .pipe(concat('script.js'))
                .pipe(gulp.dest('TrainingTasks/javascript/'));
});
```

## Folder structure

../javascript/tasks/ -> contains the JS solutions of the problems

../javascript/utils/ -> contains the utility routines to run the tasks and to show the UI

../tests/unitTests.js -> contains the unit-tests for every solution

## List of tasks
- Count total number of zeros from 1 upto n? Do not use string!
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/numbers/totalZerosCounter.js)

- How would you verify a prime number?
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/numbers/primeNumberChecker.js)

- Calculate prime factorization of a number.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/numbers/numberPrimeFactorization.js)
  
- How could you find all prime factors of a number?
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/numbers/primeFactorsOfNumber.js)
  
- How to get nth Fibonacci number?
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/numbers/nthFibonacciNumberCounter.js)
  
- How would you find the greatest common divisor of two numbers?
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/numbers/greatestCommonDivisorCounter.js)
  
- Create a for loop that iterates up to N (max 100) while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/strings/fizzBuzzTask.js)

- Given a 32-bit signed integer, reverse digits of an integer.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/numbers/didgitsRevercer.js)

- Count the number of prime numbers less than a non-negative number, n.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/numbers/primeNumberCounter.js)

- Write a program to check whether a given number is an ugly number.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/numbers/uglyNumbersDeterminer.js)

- Write an algorithm to determine if a number is "happy".
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/numbers/happyNumberDeterminer.js)

- Given an integer, write a function to determine if it is a power of three.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/numbers/powerOfThreeDeterminer.js)

- Compute and return the square root of x, where x is guaranteed to be a non-negative integer. Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/numbers/squareRootOfNumber.js)

- Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string. You must not use any built-in BigInteger library or convert the inputs to integer directly.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/numbers/bigNumbersMultiplier.js)

- Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/strings/uniqueStringCharactersCheck.js)

- How would you reverse a string in JavaScript?
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/strings/stringReverse.js)

- Given two strings s and t, write a function to determine if t is an anagram of s.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/strings/anagramStringDeterminer.js)

- Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/strings/toLowerCaseTask.js)

- Make this work: duplicate([1,2,3,4,5]);
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/arrays/arrayDuplicate.js)

- How would you remove duplicate members from an array?
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/arrays/uniqueElementsInArray.js)

- How would you merge two sorted array?
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/arrays/twoSortedArraysMerge.js)

- Given an array, rotate the array to the right by k steps, where k is non-negative.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/arrays/arrayShifter.js)

- Given an array nums, write a function to move all zeros to the end of it while maintaining the relative order of the non-zero elements.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/arrays/moveZeros.js)

- Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/arrays/pascalTriangleGenerator.js)

- Given a non-empty array of integers, every element appears twice except for one. Find that single one.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/arrays/singleElementInArraySearcher.js)

- Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/arrays/majorityElementInArraySercher.js)

- Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/arrays/missingNumberSercher.js)

- Given a matrix A, return the transpose of A. The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/arrays/transposeMatrix.js)

- Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A. You may return any answer array that satisfies this condition.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/arrays/parityArraySorting.js)

- Given a linked list, determine if it has a cycle in it. If pos is -1, then there is no cycle in the linked list.
[Solution](https://github.com/zhva/TrainingTasks/blob/master/javascript/tasks/lists/linkedListCycle.js)

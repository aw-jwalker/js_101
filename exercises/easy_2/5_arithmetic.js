/* Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input. */

import { prompt } from '../../utils/prompt.js';

let num1 = parseInt(prompt('Enter a positive integer: '));
let num2 = parseInt(prompt('Enter another positive integer: '));
let results = {};


function runOperations(num1, num2) {
  results.add = num1 + num2;
  results.subtract = num1 - num2;
  results.product = num1 * num2;
  results.quotient = num1 / num2;
  results.remainder = num1 % num2;
  results.power = num1 ** num2;
  console.log(results);
}

runOperations(num1, num2);

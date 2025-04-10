/* Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive. */

/* inputs: integer > 0, pick sum or product
 * outputs: all numbers between 1 and the integer inclusive (either sum or product)
 * have: get input, convert to integer
 */

let rls = require('readline-sync');
function prompt(phrase) {
  return rls.question(phrase)
}

function output(number, operator) {
  let total = 0;
  if (operator === 's') {
    if (number > 0) {
      for (let i = 1; i <= number; i++) {
        total += i;
        console.log(total);
      }
    }
  } else if (operator === 'p') {
    if (number > 0) {
      for (let i = 1; i <= number; i++) {
        total *= i;
        console.log(total);
      }
    }
  }
}

let number = parseInt(prompt('Enter an integer > 0: '))
let operator = prompt('Choose sum (s) or product (p): ')

output(number, operator);

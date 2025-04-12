/* Ask the user for two numbers.
Ask the user for the type of operation to perform: add, subtract, multiply or divide.
Perform the calculation and display the result. */

function prompt(phrase) {
  let rls = require('readline-sync')
  return rls.question('=> ' + phrase);
}

function getNumber() {
  let num = prompt('enter a number: ');
  while (invalidNumber(num)) {
    num = prompt('error! enter a valid number: ');
  }
  return num;
}

function getOperator() {
  let operator = prompt('operator:\n (+) (-) (*) (/): ');
  while (invalidOperator(operator)) {
    operator = prompt('error! enter a valid operator:\n (+) (-) (*) (/): ');
  }
  return operator;
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function invalidOperator(operator) {
  let validOperators = ['+', '-', '*', '/'];
  return !validOperators.includes(operator);
}

function launchCalc() {
  console.log('Welcome to the Calculator!');
  let num1 = getNumber();
  let num2 = getNumber()
  let operator = getOperator();

  function calc(num1, num2, operator) {
    let output;
    switch (operator) {
      case '+':
        output = num1 + num2;
        break;
      case '-':
        output = num1 - num2;
        break;
      case '*':
        output = num1 * num2;
        break;
      case '/':
        output = num1 / num2;
        break;
      default:
        output = 'error';
        break;
    }

    return output;
  }

  console.log('The result is: ' + calc(num1, num2, operator));
}

launchCalc();

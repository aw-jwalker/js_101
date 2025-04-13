/* Ask the user for two numbers.
Ask the user for the type of operation to perform: add, subtract, multiply or divide.
Perform the calculation and display the result. */
let msgs = require('./5_calculator_messages.json');

function prompt(phrase) {
  let rls = require('readline-sync')
  return rls.question('=> ' + phrase);
}

function getNumber() {
  let num = prompt(msgs.enterNum);
  while (invalidNumber(num)) {
    num = prompt(msgs.invalidNum);
  }
  return num;
}

function getOperator() {
  let operator = prompt(msgs.enterOperator);
  while (invalidOperator(operator)) {
    operator = prompt(msgs.invalidOperator);
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
  console.log(msgs.welcome);
  let num1;
  let num2;
  let operator;
  let output;
  let keepGoing = 'y';

  while (keepGoing === 'y') {
    num1 = getNumber();
    num2 = getNumber();
    operator = getOperator();

    function calc(num1, num2, operator) {
      output = 0;
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
    console.log(msgs.result + calc(num1, num2, operator));
    keepGoing = prompt(msgs.continue);
  }

  console.log(msgs.goodbye)
}

launchCalc();

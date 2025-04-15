let msgs = require('./5_calculator_messages.json');

function prompt(phrase) {
  let rls = require('readline-sync')
  return rls.question('=> ' + phrase);
}

function getNumber(key) {
  let num = prompt(`enter ${key}: `);
  while (invalidNumber(num)) {
    num = prompt(msgs.invalidNum);
  }
  return num;
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function getLoanValues(loanValues) {
  loanValues.loanAmount = getNumber('loan amount');
  loanValues.annualPercentageRate = getNumber('apr (%)') / 100;
  loanValues.loanDurationMonths = getNumber('loan duration (years)') * 12;
  loanValues.monthlyInterestRate = loanValues.annualPercentageRate / 12;
  return loanValues;
}

function calcMonthlyPayment(loanValues) {
  let p = loanValues.loanAmount;
  let j = loanValues.monthlyInterestRate;
  let n = loanValues.loanDurationMonths;
  let monthlyPayment = p * (j / (1 - Math.pow((1 + j), (-n))));
  return monthlyPayment
}

function launchCalc() {
  let loanValues = {
    loanAmount: 0,
    annualPercentageRate: 0,
    loanDurationMonths: 0,
    monthlyInterestRate: 0,
  };
  let monthlyPayment;
  let keepGoing = 'y';

  console.log(msgs.welcome)
  while (keepGoing === 'y') {
    loanValues = getLoanValues(loanValues);
    monthlyPayment = calcMonthlyPayment(loanValues).toFixed(2);
    console.log(`${msgs.result}\$${monthlyPayment}/month`);

    keepGoing = prompt(msgs.continue)
  }
  console.log(msgs.goodbye)
}

launchCalc();

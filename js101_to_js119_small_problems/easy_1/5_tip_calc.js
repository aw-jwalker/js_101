/* Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter valid positive numbers. */


let rls = require('readline-sync');
function prompt(phrase) {
  return rls.question(phrase)
}

function tipCalc() {
  let bill = Number(prompt("enter bill amount ($): "));
  let rate = (Number(prompt("enter tip rate (%): ")))/100;
  let tip = bill * rate;
  let total = bill + tip;

  console.log(`The tip is \$${tip}, the bill total is \$${total}.`);
}

tipCalc();

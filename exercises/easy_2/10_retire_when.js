import { prompt } from '../../utils/prompt.js';

const year = (new Date()).getFullYear();
const age = parseInt(prompt("Your age: "));
const retireAge = parseInt(prompt("Retirement age: "));

function retireWhen(year, age, retireAge) {
  const yearsLeft = retireAge - age;
  const retireYear = year + yearsLeft;

  console.log(`It is ${year}, you will retire in ${retireYear}`);
}

retireWhen(year, age, retireAge);

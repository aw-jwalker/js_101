/* Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers. */

import { prompt } from '../../utils/prompt.js';

function getNumbers() {
  const numString = prompt('Enter six numbers (1,2,...,6): ');
  return numString.split(",");
}

function checkLast(arr) {
  let lastNum = arr.pop();
  if (arr.indexOf(lastNum) !== -1) {
    console.log(`the number ${lastNum} appears in ${arr}`);
  } else {
    console.log(`the number ${lastNum} does not appear in ${arr}`);
  }
}

const sixNums = getNumbers();
checkLast(sixNums);


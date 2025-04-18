/* reuse the multiply function to create a square fn
 * then modify so it works with any power
 */

const multiply = (num1, num2) => num1 * num2;
const square = (num) => multiply(num, num);

function exponentiate(num, power) {
  let i = 0;
  let result = 1;

  do {
    result = multiply(result, num);
    i++;
  } while (i < power);

  if (power === 0) {
    result = 1;
  }

  return result;
}

console.log(multiply(5, 3) === 15); // logs true
console.log(square(8) === 64);
console.log(exponentiate(2, 4) === 16);
console.log(exponentiate(3, 0) === 1);

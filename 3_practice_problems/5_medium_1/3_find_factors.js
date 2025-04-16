// refactor this code to handle 0 and negative numbers
/* function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

console.log(factors(36));
 */
function findFactors(number) {

  let factors = [];

  for (divisor = number; divisor > 0; divisor--) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
  }

  return factors;
}

console.log(findFactors(-10));

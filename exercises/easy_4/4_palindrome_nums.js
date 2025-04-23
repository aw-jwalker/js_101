/* Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards. */

function isPalindromicNumber(num) {
  let arrNum = Array(String(num).split('')).flat();
  let reverseNum = Array(String(num).split('')).flat().reverse();
  console.log(arrNum);
  console.log(reverseNum);
  return String(arrNum) === String(reverseNum);
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

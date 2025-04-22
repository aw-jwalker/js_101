/* Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter. */

export function isPalindrome(str) {
  let rev = str.split('').reverse();
  for (let i = 0; i < str.length; i++) {
    if (rev[i] === str[i]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}



console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

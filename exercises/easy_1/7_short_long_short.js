/* Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths. */

let rls = require('readline-sync');
function prompt(phrase) {
  return rls.question(phrase)
}

let shortLongShort = function (str1, str2) {
  let long = "";
  let short = "";

  if (str1.length >= str2.length) {
    long = str1;
    short = str2;
  } else {
    long = str2;
    short = str1;
  }

  return (short + long + short)
}

let str1 = prompt('enter a string: ')
let str2 = prompt('enter another string: ')

console.log(shortLongShort(str1, str2));

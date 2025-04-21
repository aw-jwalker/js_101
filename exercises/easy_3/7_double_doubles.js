/* A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number, in which case, return the double number as-is. */

function twice(num) {
  let str = num.toString().split('');
  let right = str.splice(0, (str.length / 2));
  let left = str;

  for (let i = 0; i < right.length; i++) {
    if (left[i] !== right[i]) {
      return num * 2;
    } else {
      continue;
    }
  }

  return num;

}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

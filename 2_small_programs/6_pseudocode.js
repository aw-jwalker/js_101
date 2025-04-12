// write a function that returns the sum of two numbers

function sumNums(num1, num2) {
  return num1 + num2
}

// write a function that takes an array of strings, and returns those strings concatenated

/* START
 * SET arr = [str, str, str]
 *
 * FUNCTION arrConcat (arr) {
    *   for loop {
    *     final string = add current element
    *   }
    *
    *   return final string
    * }
*/

let arr = ['foo', 'bar', 'qix'];

function arrConcat(arr) {
  let allStrings = "";
  for (let i = 0; i < arr.length; i++) {
    allStrings += arr[i];
  }

  return allStrings;
}

console.log(arrConcat(arr));

// a method that takes an array of integers, and returns a new array with every other element from the original array, starting with the first element

/* START
 * 
 * need to return all odd elements as a new array
 * or remove any even element. So if i % 2 === 0 then arr[i].delete while i < arr.length
 */

function everyOther(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(everyOther([1, 4, 7, 2, 5]));

// determine the third occurence of a given character in a string
/* create an object of occurences of the character, return the value of key '3'
 * if the character occurs less than 3 times, return null
 */

function findThird(char, str) {

  let obj = {};
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char && counter < 3) {
      counter++
      obj[counter] = i;
    }
  }

  console.log('here is the full object: ');
  console.log(obj);
  console.log('its length is: ' + (Math.max(Number(Object.keys(obj)))));
  if (Math.max(Number(Object.keys(obj))) < 3) {
    return null
  } else {
    return obj['3'];
  }
}

let char = "x";
let str = "axbxcdxex";

console.log(`lets find the 3 occurence of "${char}" in "${str}"...`)
console.log("So the third occurence is at index: " + findThird(char, str));


// see ./6_make_arr_max_nums.js for the next exercise



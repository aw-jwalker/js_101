// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

function crunch(str) {
  let arr = str.split('');
  let crunchStr = [];

  for (let i = 0; i < str.length; i++) {

    if (arr[i + 1] === arr[i]) {
      continue;
    } else {
      crunchStr.push(arr[i]);
    }

  }

  return crunchStr.toString().replaceAll(",", "");
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""


/* textbook solution:

/* function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
} */

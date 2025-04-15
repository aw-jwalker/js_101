function question1() {
  // replace a word with another word in the sentence
  let advice = "Few things in life are as important as house training your pet dinosaur.";
  let oldWord = "important"
  let newWord = "urgent"
  let newAdvice = advice.replace(oldWord, newWord)
  console.log(newAdvice)
}

function question2() {
  // reverse the array without mutating original array (cant use reverse or sort)
  let letters = ['a', 'b', 'c', 'd', 'e'];
  let lettersReversed = [];
  for (let i = 0; i < letters.length; i++) {
    lettersReversed[letters.length - i] = letters[i];
  }
  lettersReversed.shift();
  console.log(letters);
  console.log(lettersReversed);

  // solution: let reversedArray = numbers.slice().reverse();
  // or: numbers.forEach( (number) => {
  //        reversedArray.unshift(number)
  //     })
}

function question3() {
  let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

  let number1 = 8;  // false
  let number2 = 95; // true

  console.log(number1 + ' is in the array: ' + numbers.includes(number1));
  console.log(number2 + ' is in the array: ' + numbers.includes(number2));
}

function question4() {
  // insert "four score and " in two different ways
  let famousWords = "seven years ago...";
  let moreFamousWords = "Four score and ";
  let famousSentence = moreFamousWords + famousWords;
  console.log(famousSentence);
  console.log(moreFamousWords.concat(famousWords));
}

function question5() {
  let letters = ['a', 'b', 'c', 'd', 'e'];
  letters.splice(2, 1);
  console.log(letters)
}

function question6() {
  // add values to an array, 2 at a time
  let flintstones = ['Fred', 'Wilma'];
  flintstones.push(['Barney', 'Betty'], ['Bambam', 'Pebbles']);
  let flatstones = flintstones.flat();
  console.log(flintstones);
  console.log(flatstones);
}

function question7() {
  // create an array of just barney's name and number
  let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
  let barneyArr = Object.entries(flintstones)[2];
  console.log(Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift())
  console.log(barneyArr);
}

function question8() {
  // check if these are arrays
  let numbers = [1, 2, 3, 4]; // true
  let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
  console.log(Array.isArray(numbers));
  console.log(Array.isArray(table));
}

function question9() {
  let title = "Flintstone Family Members";
  const TABLE_WIDTH = 40;
  let padding = Math.floor((TABLE_WIDTH - title.length) / 2);
  title.padStart(padding + title.length);
  console.log(title);
}

function question10() {
  // count lowercase 't' chars
  let statement1 = "The Flintstones Rock!";
  let statement2 = "Easy come, easy go.";
  console.log(statement1.split('').filter(char => char === 't').length);
}

question10();

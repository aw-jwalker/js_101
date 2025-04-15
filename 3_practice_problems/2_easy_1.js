function question1() {
  let numbers = [1, 2, 3];
  numbers[6] = 5;
  console.log(numbers);
}


function question2() {
  // determine if a string ends with "!"

  let str1 = "Come over here!"; // true
  let str2 = "What's up, Doc?"; // false

  let str1LastChar = str1[str1.length - 1];
  let str2LastChar = str2[str2.length - 1];

  console.log(`str1 last character is "!": `);
  console.log(str1LastChar === '!');
  console.log(`str2 last character is "!": `);
  console.log(str2LastChar === '!');

  // solution: we can use str.endsWith("!")

}

function question3() {
  // determine whether the object contains an entry for "Spot"

  let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
  let key = 'Herman';
  console.log(`the object contains an entry for "${key}": `);
  console.log(Object.keys(ages).includes(key));

  // we can use ages.hasOwnProperty(key);
}

function question4() {
  // print all lower case except first character of sentence

  let munstersDescription = "the Munsters are CREEPY and Spooky.";
  // => The munsters are creepy and spooky.

  let munstersFixed = munstersDescription.toLowerCase();
  let munstersCapped = munstersFixed[0].toUpperCase() + munstersFixed.slice(2 - munstersFixed.length - 1);
  console.log(munstersCapped);

  // solution:
  // munstersDescription.charAt(0).toUpperCase() +
  //   munstersDescription.substring(1).toLowerCase();
}

function question6() {
  // add some entries to the munster family object
  let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
  console.log(ages);

  let additionalAges = { Marilyn: 22, Spot: 237 };
  Object.assign(ages, additionalAges);

  console.log(ages);


}

function question7() {
  // determine whether a word appears in the sentence
  let str1 = "Few things in life are as important as house training your pet dinosaur.";
  let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
  let word = "Dino";
  console.log(`str1 has ${word}: ${str1.includes(word)}`);
  console.log(`str2 has ${word}: ${str2.includes(word)}`);
}

function question9() {
  // add an element to the array
  let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
  flintstones.push("Dino", "Hoppy");
  console.log(flintstones);
}

function question10() {
  // delete everything house and after

  let advice = "Few things in life are as important as house training your pet dinosaur.";
  let adviceTrunc = advice.slice(0, advice.indexOf('house'));
  console.log(adviceTrunc);
  // Expected return value:
  // => 'Few things in life are as important as '
}

question10();

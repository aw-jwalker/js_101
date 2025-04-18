function prompt(phrase) {
  const rls = require('readline-sync');
  return rls.question(phrase);
}

let name = prompt('What is your name? ');

if (name[name.length - 1] === '!') {
  let nameUpper = name.substring(0, name.length - 1).toUpperCase();
  console.log(`HELLO ${nameUpper}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}


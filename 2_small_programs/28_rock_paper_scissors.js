function prompt(phrase) {
  const rls = require('readline-sync');
  return rls.question('=> ' + phrase);
}

// user choice
// cpu choice
// display winner
// ask to continue

const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
};

function getUserChoice() {
  let userChoice = prompt(`choose one of ${Object.keys(VALID_CHOICES).join(', ')}: `);
  return userChoice;
}

function getCPUChoice() {
  let randomIdx = Math.floor(Math.random() * Object.keys(VALID_CHOICES).length);
  let cpuChoice = Object.keys(VALID_CHOICES)[randomIdx];
  return cpuChoice;
}

function calcWinner(user, cpu) {
  let winner;

  if ((user === 'r' && cpu === 's') ||
    (user === 'p' && cpu === 'r') ||
    (user === 's' && cpu === 'p')) {
    winner = 'you';
  } else if (user === cpu) {
    winner = 'tie';
  } else {
    winner = 'cpu';
  }

  return winner;
}

let keepGoing = 'y';
let userChoice;
let cpuChoice;
let winner;

console.log('welcome to "rock, paper, scissors"!');

while (keepGoing === 'y') {
  userChoice = VALID_CHOICES[getUserChoice()];
  cpuChoice = VALID_CHOICES[getCPUChoice()];
  winner = calcWinner(userChoice, cpuChoice);
  console.log(`=> you chose: ${userChoice}`);
  console.log(`=> cpu chose: ${cpuChoice}`);
  console.log(`=> the winner is: ${winner}`);
  keepGoing = prompt('play again (y/n): ');
}

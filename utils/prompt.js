import readline from 'readline-sync';

export function prompt(phrase) {
  return readline.question(phrase);
}

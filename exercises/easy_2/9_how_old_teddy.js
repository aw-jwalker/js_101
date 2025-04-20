/* Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive). */

let getAge = () => Math.floor((Math.random() * 100) + 20);

const ageTeddy = Math.floor((Math.random() * 100) + 20);

console.log(ageTeddy);
console.log(ageTeddy <= 120 && ageTeddy >= 20);

/* How big is the room?
 * 
 * Build a program that asks the user to enter the length and width of a room in meters,
 * and then logs the area of the room to the console in both square meters and square feet.
 *
 * Note: 1 square meter == 10.7639 square feet
 *
 * Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
 */

let rls = require('readline-sync');
function prompt(phrase) {
  return rls.question(phrase)
}

const SQMETERS_TO_SQFEET = 10.7639;
let length = parseInt(prompt('Enter the length of the room in meters: '));
let width = parseInt(prompt('Enter the width of the room in meters: '));

let areaMeters = length * width;
let areaFeet = SQMETERS_TO_SQFEET * areaMeters;

console.log('The area of the room in square meters: ' + areaMeters.toFixed(2));
console.log('The area of the room in square feet: ' + areaFeet.toFixed(2) ;



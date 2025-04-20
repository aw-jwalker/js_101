/* create a fn that multiplies two nums and return the result
 * fn mult(num1, num2) => num1 * num2;
 * this creates a variable mult that points to the function object
 * in the scope of the function, two variables are created, num1 and num2
 * they are assigned the values of the arguments, at a new address in memory
 * they are multiplied
 * this expression is evaluated and returned. 
 * the result is compared to the expected output
 */

const multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 3) === 15); // logs true

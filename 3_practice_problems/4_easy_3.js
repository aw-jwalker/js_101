function question1() {
  // remove all array elements in 3 different ways
  let numbers = [1, 2, 3, 4];
  // numbers.filter(element => {numbers.indexOf(element) >= numbers.length});
  // numbers.splice(0, numbers.length);
  // numbers.length = 0;
  numbers.fill('', 0, numbers.length);
  console.log(numbers);
}

function question2() {
  console.log([1, 2, 3] + [4, 5]);
  // outputs 1,2,34,5
}

function question3() {
  let str1 = "hello there";
  let str2 = str1;
  str2 = "goodbye!";
  console.log(str1);
}

function question5() {
  // rewrite to use only 1 return statement
  function isColorValid(color) {
    if (color === "blue" || color === "green") {
      return true;
    } else {
      return false;
    }
  }

  function isColorValidFixed(color) {
    return (color === "blue" || color === "green")
  }

  let color = "green";
  console.log(isColorValid(color));
  console.log(isColorValidFixed(color));
}

question5();


function logInBox(str) {
  let horizontal = "+" + "-".repeat(str.length + 2) + "+";
  let vertical = "|" + " ".repeat(str.length + 2) + "|";
  let textLine = "| " + str + " |";

  console.log(horizontal);
  console.log(vertical);
  console.log(textLine);
  console.log(vertical);
  console.log(horizontal);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

// future challenge: add word wrapping

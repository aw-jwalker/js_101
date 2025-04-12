function makeLonger(string, longer) {
  if (longer) {
    return string + string;
  } else {
    return string;
  }
}

console.log(makeLonger("abc", true));
console.log(makeLonger("xyz", false));

function isDigit(char) {
  if (char >= "0" && char <= "9") {
    return true;
  } else {
    return false;
  }
}

console.log(isDigit("5"));
console.log(isDigit("a"));

let value = "a";

if (value === true) {
  console.log("its true!")
} else if (value === false) {
  console.log("its false :\(");
} else {
  console.log("its neither?");
}

/* These evalute as false:
 * null
 * NaaN
 * undefined
 * false
 * ""
 * 0
 */



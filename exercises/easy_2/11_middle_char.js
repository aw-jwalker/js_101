

function centerOf(str) {
  let start = Math.floor((str.length - 1) / 2);
  let stop = Math.ceil((str.length - 1) / 2);
  if (start === stop) {
    console.log(str[start])
  } else {
    console.log(str[start] + str[stop]);
  }
}

centerOf('I Love JavaScript'); // "a
centerOf('Launch School');     // "
centerOf('Launch');            // "un
centerOf('Launchschool');      // "hs
centerOf('x');                 // "x"

/*
 * length = 6, indices 0-5
 * length - 1 = 5
 * length - 1 / 2 = 2.5 
 * floor(length - 1 / 2) = 2
 * ceil(length - / 2) = 3
 * arr[2], arr[3]
 *
 * length = 7, indices 0-6
 * length - 1 = 6
 * length - 1 / 2 = 3
 *
 * 
 */

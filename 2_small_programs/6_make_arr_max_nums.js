function prompt(phrase) {
  let rls = require('readline-sync');
  return rls.question(phrase);
}

function findMax(arr) {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) >= maxNum) {
      maxNum = Number(arr[i]);
    }
  }
  console.log('max num: ' + maxNum);
  return maxNum;
}

function getArr() {
  let arr = prompt('enter numbers: n1, n2, ..., nn: ');
  console.log('input array: ');
  console.log(arr);
  return arr;
}

function makeArrOfMaxNums() {
  let keepGoing = 'y';
  let numArr = [];
  let maxArr = [];

  console.log('we are going to make an array of the max nums from each array... ');
  while (keepGoing === 'y') {
    numArr = getArr();
    maxArr.push(findMax(numArr));
    keepGoing = prompt('keep going? (y/n): ');
  }

  console.log('the array of max nums is: ');
  console.log(maxArr);
  return maxArr;
}

makeArrOfMaxNums();

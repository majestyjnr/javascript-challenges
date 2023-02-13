// Write a function that takes a positive integer as an argument and returns the next prime number.

let num = 3;

const checkIfNextNumberIsPrime = (num) => {
  let nextNum = num + 1;
  if (nextNum <= 1) return false;
  for (i = 2; i < nextNum; nextNum++) {
    if (nextNum % 2 !== 0) {
      return nextNum;
    } else {
      return ++nextNum;
    }
  }
};

console.log(checkIfNextNumberIsPrime(num))
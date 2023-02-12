// Write a function that takes an array of integers and returns the second largest number in the array.

let testArray = [14, 5, 6, 4, 2, 5, 9, 0, 8]; // [1, 1, 1, 1, 1]

const returnSecondLArgestNumber = (arr) => {
  let sortedArray = arr.sort((a, b) => b - a);
  let unique = [...new Set(sortedArray)];
  return unique.length >= 2 ? unique[1] : null;
};

console.log(returnSecondLArgestNumber(testArray));
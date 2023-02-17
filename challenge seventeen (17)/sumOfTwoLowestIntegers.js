/*

Write a function that takes in an array of integers and returns the sum of the two lowest positive integers. 
If the input array contains less than two positive integers, the function should return 0.

*/

const testArray = [5, -1, -7, -2];

const sumOfTwoLowestIntegers = (arr) => {
  let positiveArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveArray.push(arr[i]);
    }
  }

  if (positiveArray.length < 2) {
    return 0;
  }

  let sortedArray = positiveArray.sort((a, b) => a - b);

  let sum = sortedArray[0] + sortedArray[1];

  return sum;
};

console.log(sumOfTwoLowestIntegers(testArray));

/*

In this solution, we first initialize an empty array called `positiveArray` and push all 
the positive numbers (numbers geater than 0) into it by looping through the elements of 
the array one after the other. 

If there are less than two positive numbers in `positiveArray`, we return 0. 

Otherwise, we sort the `positiveArray` and return the sum of the two smallest positive numbers, which are the first two elements of the sorted array.

*/
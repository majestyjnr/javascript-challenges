// Solution
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumEvenNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}

console.log(sumEvenNumbers(array)); // 30


/* Explanation:

The function sumEvenNumbers() takes an array as an argument.
It initializes a variable sum to store the sum of even numbers.
It then uses a for loop to iterate through the elements in the array.
For each element in the array, it checks if it's an even number by checking if the remainder of dividing the number by 2 is equal to 0.
If the number is even, it adds it to the sum.
After the loop, it returns the sum.
This is just one possible solution. You can use different methods to solve this challenge, */

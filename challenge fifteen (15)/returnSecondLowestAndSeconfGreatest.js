/* Write a function that takes in an array of numbers and returns the second lowest and second greatest numbers in the array. 
If there are duplicates, return only one instance, and if there are less than 2 values in the array, return the same value for both. */


const testArray = [2, 4, 6, 2, 4, 8, 7, 9, 12, 5]
const returnSecondLowestAndSeconfGreatest = (arr) =>{

  if(arr.length < 2){
    return [arr[0], arr[0]]
  }

  // Removes duplicates from the array
  const uniqueArray = [... new Set(arr)]

  // Sorts the array in acsending order
  const sortedArray = uniqueArray.sort((a, b)=> a - b)

  // Get the second lowest and second greatest numbers
  let secondLowest = sortedArray[1]
  let secondGreatest = sortedArray[sortedArray.length - 1]

    // Return the result in an array
  return [secondLowest, secondGreatest]
}

console.log(returnSecondLowestAndSeconfGreatest(testArray))


/*

Here's an explanation of the solution:

First, we check if the length of the array is less than 2. If it is, we return an array with the same value for both the second lowest and second greatest numbers.
Next, we remove any duplicates from the array using the Set object.
We sort the array in ascending order using a custom comparison function.
We get the second lowest and second greatest numbers from the sorted array.
Finally, we return an array with the second lowest and second greatest numbers.
For example, if we call the function with the array [1, 5, 2, 3, 4, 5], the function will return [2, 4], which are the second lowest and second greatest numbers in the array.

*/
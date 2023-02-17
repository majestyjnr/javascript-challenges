// Write a function that takes in an array of integers and returns an array with the elements sorted in descending order.

let testArray = [2, 9, 4, 6, 7, 8, 3, 5, 10, 4]

const returnArrayInDescendingOrder = (arr) =>{
  let sortedArray = arr.sort((a, b)=> b - a)
  return sortedArray
}

console.log(returnArrayInDescendingOrder(testArray))


/* 

This function takes in an array of integers and uses the built-in sort() method to sort the elements in descending order. 
The sort() method takes an optional comparison function as an argument, which is used to determine the order of the elements. 
In this case, the function (a, b) => b - a is used, which sorts the elements in descending order by subtracting b from a. 
The function then returns the sorted array.

*/
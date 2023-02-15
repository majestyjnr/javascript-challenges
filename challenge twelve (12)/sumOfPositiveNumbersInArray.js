// Write a function that takes in an array of numbers and returns the sum of all the positive numbers in the array.

let testArray = [14, 5, 6, 4, -2, 5, -9, 0, 8]
let lessNums = [2, 3, 4, 5, -5]

const sumOfPositiveNumbersInArray = (arr) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i]
        }
    }
    return sum
}

console.log(sumOfPositiveNumbersInArray(lessNums))

/*

This function takes an array of numbers as an argument and initializes a variable sum to 0. 
It then loops through each element of the array and checks if the element is greater than 0. If it is, it adds the element to the sum. 
Finally, the function returns the sum of all positive numbers in the array. 

*/
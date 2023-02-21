// Write a function that takes an array of integers and returns the second smallest element in the array. 
// The function should handle duplicates and return null if there are less than 2 unique elements in the array.

const array = [0, 4, 6, 8, 3, 4,4, 5, 3, 4]

const returnSmallestElement = (arr) =>{
    const uniqueArray =  [...new Set(arr)]
    if(uniqueArray.length < 2){
        return null
    }
    uniqueArray.sort((a, b)=> a - b)
    return uniqueArray[1]
}

console.log(returnSmallestElement(array)) 
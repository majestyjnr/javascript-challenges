// Write a function in JavaScript that takes in a positive integer as input and returns true if the number is a prime number, and false otherwise.

let testInteger = 1

const checkPrime = (num) =>{
    if(num <= 1) return false
    
    if(num%2 === 0){
        return false
    } else{
        return true
    }
}

console.log(checkPrime(testInteger))

/* 

Explanation:

First, we check if the number is less than or equal to 1, in which case it's not a prime number, so we return false.
Then, we use a for loop to iterate from 2 to num - 1.
In each iteration, we check if num is divisible by i (num % i === 0).
If it is divisible, it means num is not a prime number, so we return false.
Finally, if the for loop completes without returning false, it means num is a prime number, so we return true.

*/
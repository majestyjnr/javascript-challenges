                            
let testString = 'racecar'  //examples of palindrome words: 'racecar' 'civic', 'level', 'rotator'

function isPalindrome(str) {
    // Convert string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if the string is the same when reversed
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome(testString))
                            
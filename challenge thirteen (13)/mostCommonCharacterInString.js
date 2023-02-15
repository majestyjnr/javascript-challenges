// Write a function that takes in a string and returns the most common character in the string.

let testString = 'Developer'

function mostCommonCharacter(str) {
    let charCount = {};
    let maxChar = '';
    let maxCount = 0;
    
    // count the occurrences of each character in the string
    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    
    // find the most common character
    for (let char in charCount) {
      if (charCount[char] > maxCount) {
        maxChar = char;
        maxCount = charCount[char];
      }
    }
    
    return maxChar;
  }

  console.log(mostCommonCharacter(testString))

/*

The function first initializes an empty object called charCount to keep track of the count of each character in the string. 
Then, it loops through each character in the input string and increments its count in charCount.

Next, the function loops through each key in charCount and updates the value of maxChar and maxCount if the current character count is greater than the current max count.

Finally, the function returns maxChar, which is the character with the highest count. 
If there are ties, the function will return the character that was encountered first during the loop.

*/
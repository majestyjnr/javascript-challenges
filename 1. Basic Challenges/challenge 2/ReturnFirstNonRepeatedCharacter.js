function firstNonRepeatedCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (str.indexOf(char) === str.lastIndexOf(char)) {
        return char;
      }
    }
    return null;
  }
  
  console.log(firstNonRepeatedCharacter("hello")); // "h"
  console.log(firstNonRepeatedCharacter("apple")); // "a"


  /* Explanation:

  The function firstNonRepeatedCharacter takes a string as an argument.
  It uses a for loop to iterate through each character in the string.
  For each character, it checks if the index of the first occurrence of the character is equal to the index of the last occurrence of the character.
  If the first occurrence index of a character is equal to the last 
  occurrence index of the same character, it means that the character only appears once in the string. so it returns the character.
  If no unique character is found, the function returns null. */
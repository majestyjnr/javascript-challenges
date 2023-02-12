let testString = "Hello World"

const removeVowelsFromString = (str) =>{
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let newString = ""
    for(i = 0; i < str.length; i++){
        if(!vowels.includes(str[i])){
            newString += str[i]
        }
    }
    return newString;
}

console.log(removeVowelsFromString(testString))

/* 

Explanation:

We first define a string of vowels vowels and an empty string result that we'll use to store the output.

Next, we use a for-of loop to iterate over each character char in the input str.
Inside the loop, we use the includes() method to check if the char is not present in the vowels string.
If the char is not a vowel, we add it to the result string.
Finally, after the loop, we return the result string.

*/
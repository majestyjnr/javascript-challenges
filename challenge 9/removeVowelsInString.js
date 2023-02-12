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
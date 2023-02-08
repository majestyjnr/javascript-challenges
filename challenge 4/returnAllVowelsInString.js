const string = 'My name is Majesty. I am a developer'

const returnAllVowelsInString = (str) => {
    str = str.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count += 1
        }
    }
    return count
}

console.log(returnAllVowelsInString(string))
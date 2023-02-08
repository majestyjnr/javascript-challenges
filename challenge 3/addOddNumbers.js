const array = [2, 4, 3, 5, 6, 7, 8, 9]

const addOddNumbers = (array) =>{
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
            sum += array[i]
        }
    }
    return sum
}
console.log(addOddNumbers(array))
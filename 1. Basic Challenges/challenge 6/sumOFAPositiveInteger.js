const thePositiveInteger = 2345

const sumOfAPositiveInteger = (theInteger) => {
    let sum = 0
    for(let i = 0; i< theInteger.length; i++){
        sum += theInteger[i]
    }
    return sum;
}
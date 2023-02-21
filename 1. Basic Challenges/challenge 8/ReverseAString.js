/* Write a function that takes a string as an argument and returns a new string with the characters in reverse order.

For example, the string "hello" would become "olleh". */

let theString = "Developer"
const reverseAString = (string) =>{
    return string.split('').reverse().join('')
}

console.log(reverseAString(theString))

/*

This function takes a string str as its argument. It performs the following operations:

str.split('') splits the string into an array of characters. For example, the string "hello" would become ['h', 'e', 'l', 'l', 'o'].

reverse() is an array method that reverses the order of elements in the array. After calling reverse(), the array would become ['o', 'l', 'l', 'e', 'h'].

join('') is an array method that joins the elements of the array into a string. By passing an empty string as the argument to join(''), the array elements are concatenated together without any separator. The result of join('') would be the string "olleh".

Finally, the function returns the result of join(''), which is the reversed string.

*/
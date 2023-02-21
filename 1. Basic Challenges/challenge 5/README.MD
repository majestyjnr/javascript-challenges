# Write a function that takes an array of integers and returns the second smallest element in the array. The function should handle duplicates and return null if there are less than 2 unique elements in the array.


# Explanation:

## Why was Set() used?

Set is a built-in object in JavaScript that lets you store unique values of any type. 
In this solution, Set is used to create an array uniqueArr that contains only the unique elements from the input array arr.

Here's how the code works:

new Set(arr) creates a new Set object that contains all unique elements from the arr array.

``[...new Set(arr)]`` spreads the elements of the Set object into a new array. This effectively removes any duplicates from arr.

uniqueArr is then sorted in ascending order using the sort method.

The second smallest element in the array is returned as ``uniqueArr[1]``.

By removing duplicates and only considering the unique values, we ensure that the second smallest value is accurately calculated and returned by the function.


## Why is the second smallest element in the array is returned as ``uniqueArr[1]``?


The second smallest element in the array is returned as ``uniqueArr[1]`` because after removing duplicates and 
sorting the array uniqueArr in ascending order, the second smallest element will be at index 1 in the array.

This is because arrays in JavaScript are 0-indexed, which means that the first element in an array is located 
at index 0, the second element is at index 1, and so on. By accessing ``uniqueArr[1]``, we retrieve the element 
located at the second position in the array, which is the second smallest element in this case.

For example, if uniqueArr is [1, 2, 3, 4], then ``uniqueArr[1]`` would return 2, which is the second smallest element in the array.

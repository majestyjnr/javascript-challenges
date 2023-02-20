/* 

Given a string s containing just the characters '(', ')', '{', '}' and '[' and ']', determine if the input string is valid. 

An input string is valid if:

0. Open brackets must be closed by the same type of brackets.
0. Open brackets must be closed in the correct order>

Constraints:
1.   1<= s.length <= 104
2.    s consists pf parentheses only '()[]{}'

*/

const isValid = (s) => {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (c === '(' || c === '{' || c === '[') {
        stack.push(c);
      } else {
        if (stack.length === 0) {
          return false;
        }
        if (c === ')' && stack[stack.length-1] === '(') {
          stack.pop();
        } else if (c === '}' && stack[stack.length-1] === '{') {
          stack.pop();
        } else if (c === ']' && stack[stack.length-1] === '[') {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
}
  
/* 

using an array to implement the stack. We iterate through the string s, and if the current character is an opening bracket, 
we push it onto the stack. If it is a closing bracket, we check if it matches the opening bracket at the top of the stack. 
If it does, we pop the opening bracket from the stack. If it doesn't match or the stack is empty, we return false, indicating 
that the string is invalid.

At the end of the iteration, we check if the stack is empty. If it is, the string is valid. If it is not empty, the string is invalid.

*/
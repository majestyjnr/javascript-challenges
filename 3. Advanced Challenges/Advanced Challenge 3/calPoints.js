/*

You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect the future rounds scores. 

At the beginning of the game, you start with an empty record. You are given a list of things ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

0. An integer x - Record a new score of x.
0. "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
0.  "D" - Record a new score that is double the prevoius score. It is guaranteed there will alwasy be a prevoius score.
0. "C" - Invalidate the prevous score, removing it from the record. It is guaranteed there will always be a prevoius score.

Return the sum of all the scores on the record.

*/


const calPoints = (ops)=>{
    let stack = [];
    for (let i = 0; i < ops.length; i++) {
        let op = ops[i];
        if (!isNaN(parseInt(op))) {
            stack.push(parseInt(op));
        } else if (op === "+") {
            let score1 = stack.pop();
            let score2 = stack.pop();
            stack.push(score2);
            stack.push(score1);
            stack.push(score1 + score2);
        } else if (op === "D") {
            let score = stack[stack.length-1];
            stack.push(score*2);
        } else if (op === "C") {
            stack.pop();
        }
    }
    let sum = 0;
    for (let i = 0; i < stack.length; i++) {
        sum += stack[i];
    }
    return sum;
}


/*

This JavaScript code starts with an empty stack and iterates through the list of operations ops. 
If the operation is an integer, we push it onto the stack. If the operation is "+", we pop the top 
two scores from the stack, add them together, and push the sum onto the stack. If the operation is "D", 
we duplicate the top score on the stack and push the result onto the stack. If the operation is "C", we pop the top score from the stack.

After iterating through all the operations, we sum the remaining scores on the stack and return the result.

*/
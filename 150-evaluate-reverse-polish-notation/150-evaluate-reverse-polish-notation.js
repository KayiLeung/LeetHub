/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operation = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => ~~(a / b) // ~~ means floor towards 0
    }
    
    const stack = [];
    let a, b;
    
    for(let item of tokens) {
        if(operation[item] !== undefined) {
            b = stack.pop();
            a = stack.pop();
            stack.push(operation[item](a, b));
        } else stack.push(+item);
    }
    return stack.pop()
};
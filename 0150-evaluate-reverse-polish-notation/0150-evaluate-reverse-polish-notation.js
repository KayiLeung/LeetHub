/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operations = {
        '+' : (a ,b) => a + b,
        '-' : (a ,b) => a - b,
        '*' : (a ,b) => a*b,
        '/' : (a ,b) => ~~(a / b)
    }
    
    let stack = []
    
    for (let curr of tokens) {
        if (operations.hasOwnProperty(curr)) {
            const b = stack.pop()
            const a = stack.pop()
            stack.push(operations[curr](a, b))
        } else {
            stack.push(parseInt(curr))
        }
    }
    
    return stack[0]
};
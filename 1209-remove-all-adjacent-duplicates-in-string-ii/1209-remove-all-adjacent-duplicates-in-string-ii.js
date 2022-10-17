/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

//use stack
//iterate each char in s
//if hash is empty or last element of stack is not equal to current char
//push current char and count as 1 into stack
//if current char is same as last element of stack, this element increment 1
//then check this element count equal to k or not
//if so, pop it out from hash

//set variable res as empty str
//literate eles in stack
//use helper method repeat to reconstruct str
//return res
var removeDuplicates = function(s, k) {
    let stack = [] // [[char, count]]
    
    for(let char of s) {
        if (!stack.length || stack[stack.length - 1][0] !== char) {
            stack.push([char, 1])
        } else {
            stack[stack.length - 1][1] += 1
            if (stack[stack.length - 1][1] === k) stack.pop()
        }
    }
    
    let res = ''
    for (let [char, count] of stack) {
        res += repeat(char, count)
    }
    return res
};

const repeat = (char, count) => {
    let str = ''
    for (let i = 0 ; i < count; i++) {
        str += char
    }
    return str
}
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    
    let stack = [] // [char, count]
    
    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1] += 1
        } else {
            stack.push([char, 1])
        }
        if (stack[stack.length - 1][1] === k) {
            stack.pop()
        }
    }
    let res = ''
    for (let [char, count] of stack) {
        res += repeat(char, count)
    }
    return res
};

const repeat = (char, num) => {
    let str = ''
    for (let i = 0 ; i < num; i++) {
        str += char
    }
    return str
}
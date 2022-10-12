/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []
    let nums = '0123456789'
    for (let i = 0 ; i < s.length; i++) {
        if (s[i] !== ']') {
            stack.push(s[i])
        } else {
            let popped = ''
            while (stack[stack.length - 1] !== '[') {
                popped = stack.pop() + popped
            }
            stack.pop()
            let num = ''
            while (nums.includes(stack[stack.length - 1])) {
                num = stack.pop() + num
            }
            stack.push(repeat(Number(num), popped))
        }
    }
    
    return stack.join('')
};

const repeat = (num , str) => {
    let res = ''
    for (let i = 0 ; i < num; i++) {
        res += str
    }
    return res
}
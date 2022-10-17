/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // stack,  if not ']', push curr char to stack
    // if ']', look pop ele from stack until ele === '['
    // pop out '['
    //look for number
    // use helper method, pass in popped char andd number and return repeated char
    //push repeated char back to stack
    // return stack.join('')  after iterate the whole s
    // 3[a]2[bc]
    let stack = []
    const nums = '0123456789'
    for (let char of s) {    //stack = [ ['3'] , ['aaa'], 2]
        if (char !== ']') {      
            stack.push(char)
        } else {
            let popped = ''
            while (stack[stack.length - 1] !== '[') { 
                popped = stack.pop() + popped // a
            }
            stack.pop() // pop out '['
            let number = ''
            while (nums.includes(stack[stack.length -  1])) {
                number = stack.pop() + number
            }
            const repeated = repeat(Number(number), popped) // (3 , 'a')  => 'aaa'
            stack.push(repeated) 
        }
    }
    return stack.join('')
};

const repeat = (num, str) => { //3, a
    let res = ''
    for (let i = 0; i < num; i++) {
        res += str
    }
    return res // 'aaa'
}
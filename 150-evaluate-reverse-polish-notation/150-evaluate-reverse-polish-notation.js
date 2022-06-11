/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const nums = []
    let puns = ['*', "/","+", "-"]
    for (let t of tokens) {
        if (!puns.includes(t)) {
            nums.push(Number(t))
     
        } else {
            let second = nums.pop()
            let first = nums.pop()
            let res = 0
            switch (t) {
                case '+' :
                    res = first + second
                    nums.push(res);
                    break
                case '*':
                    res = first * second
                    nums.push(res);
                    break
                case '-':
                    res = first - second;
                    nums.push(res);
                    break
                case '/':
                    res = Math.trunc(first / second);
                    nums.push(res);
                    break
            }
        }
    }
    return nums
};
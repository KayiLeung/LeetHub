/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // const brackets = {
    //     0 : '(',
    //     1 : '{',
    //     2 : '[',
    //     3 : ')',
    //     4 : '}',
    //     5 : ']' 
    // }
    const brackets = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    const stack = []
    
    for (let i = 0; i < s.length; i++) {
        if (brackets[s[i]]) {
            stack.push(brackets[s[i]])
        } else if (s[i] !== stack.pop()) {
            return false
        }
        
    }
    
    return stack.length === 0
};
    
    
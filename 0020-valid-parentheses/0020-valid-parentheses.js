/**
 * @param {string} s
 * @return {boolean}
 */

/*
 use hash to storage all brackets, open brackets as key, closing brackets as value
literate s, if current char is open brackets store it in stack arr
if current char is closing brackets, pop the last ele in stack and see are they matching bracket, if so, continue if not, return false
return stack.length is empty or not
 */
var isValid = function(s) {
   
    const brackets = {
        "{" : "}", 
        "[" : "]",
        "(" : ")"
    }
    
    let stack = []
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (char in brackets) {
            stack.push(char)
        } else {
            const last = stack.pop()
            if (brackets[last] !== char) return false
        }
    }
    return stack.length === 0
};
    
    
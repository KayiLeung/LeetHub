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
    const stack = [s[0]]
    for (let i = 1; i < s.length; i++) {
        const curr = s[i]
        if (brackets.hasOwnProperty(curr)) {
            stack.push(curr)
        } else {
            const last = stack.pop()
            if (brackets[last] !== curr) return false
        }
    }
    return stack.length === 0
};
    
    
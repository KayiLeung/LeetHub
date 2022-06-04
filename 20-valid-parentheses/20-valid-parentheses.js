/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   
    const brackets = {
        "{" : "}", 
        "[" : "]",
        "(" : ")"
    }
    
    let closingBra = []
    
    for (let i = 0; i < s.length ; i++) {
        if (brackets.hasOwnProperty(s[i])) {
            closingBra.push(brackets[s[i]])
        } else {
            if (s[i] !== closingBra.pop()) return false
        }
    }
    return !closingBra.length 
};
    
    
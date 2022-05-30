/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   const brackets = {
       '{' : '}',
       '[' : ']',
       '(' : ')'
   }
   const stack = []
   
   for (let i = 0; i< s.length; i++) {
       console.log(stack)
       if (brackets[s[i]] !== undefined) {
           stack.push(brackets[s[i]])
       } else {
           if (stack.pop() !== s[i]) return false
       }
   }
    return stack.length === 0
};
    
    
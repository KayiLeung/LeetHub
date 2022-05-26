/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    console.log(newStr)
    let i = 0
    let j = newStr.length - 1
    lowerCaseStr = s.toLowerCase()
    
    while(i < j) {
        let start = newStr[i]
        let end = newStr[j]
        
         if (start === end) {
            i++
            j--
        } else {
            return false
        }
    }
    
    return true
};
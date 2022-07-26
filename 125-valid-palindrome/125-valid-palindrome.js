/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let newStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    
    let left = 0
    let right = newStr.length - 1
    
    while (left <= right) {
        if (newStr[left] !== newStr[right]) return false
    
        left++
        right--
    }
    return true
};
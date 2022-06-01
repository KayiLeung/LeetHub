/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let charCount = {}
    
    for (let i = 0; i< s.length; i++) {
         
        if (charCount[s[i]] === undefined || charCount[s[i]] === 0) {
            charCount[s[i]] = 1
        } else {
            charCount[s[i]] -= 1 
        }
    }
    const values = Object.values(charCount)
    
    if (values.every(ele => ele === 0)) return s.length
    
    let count = -1
    
    for (const ele of values) {
        if (ele === 1) {
            count += 1
        }
    }
    return s.length - count
};
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let chars = {}
    
    for (let ch of s) {
        if(!(ch in chars)) {
            chars[ch] = 0
        }
        chars[ch] += 1
    }
    let res = 0
    let odd = false
    for (let char in chars) {
        const count = chars[char]
        if (count % 2 === 1) {
            odd = true
            res += (Math.floor(count / 2) * 2)
        } else {
            res += count
        }
        
        
    }
    return odd === true ? res + 1: res
};
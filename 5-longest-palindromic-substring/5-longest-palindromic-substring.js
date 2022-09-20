/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s
    let res = ''
    for(let i = 0; i < s.length; i++) {
        let left = i
        let right = i
        while (0 <= left && right < s.length && s[left] === s[right]) {
            if (res.length < right - left + 1) {
                res = s.slice(left, right + 1)
            }
            left--
            right++
        }
        left = i
        right = i + 1
        
        while (0 <= left && right < s.length && s[left] === s[right]) {
            if (res.length < right - left + 1) {
                res = s.slice(left, right + 1)
            }
            left--
            right++
        }
    }
    return res
};
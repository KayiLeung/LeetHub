/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let odd = false
    let chars = {}
    for (let char of s) {
        if (!chars.hasOwnProperty(char)) {
            chars[char] = 0
        }
        chars[char] += 1
    }
    let res = 0
    for (let char in chars) {
        if (chars[char] % 2 === 1) odd = true
        res += ~~(chars[char] / 2) * 2
    }
    return odd ? res + 1 : res
};
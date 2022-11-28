/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let chars = new Map()
    let max = 0
    let start = 0
    for (let i = 0; i < s.length; i++) {
        const ch = s[i]
        if (chars.get(ch) >= start) start = chars.get(ch) + 1
        chars.set(ch, i)
        max = Math.max(max, i - start + 1)
    }
    return max
};
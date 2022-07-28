/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0
    let maxLen = 0
    let map = new Map()

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (map.get(char) >= start) start = map.get(char) + 1
        map.set(char, i)
        maxLen = Math.max(maxLen, i - start + 1)
    }
    return maxLen
};
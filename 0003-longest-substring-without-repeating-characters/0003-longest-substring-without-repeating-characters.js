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
        if (!chars.has(ch)) {
            chars.set(ch, i)
            max = Math.max(max, i - start + 1)        
        } else {
            if (chars.get(ch) < start) {
                max = Math.max(max, i - start + 1) 
            } else {
                max = Math.max(max, i - chars.get(ch))
                start = chars.get(ch) + 1
            }
            chars.set(ch, i)
        }
    }
    return max
};
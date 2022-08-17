/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let chars= {}
    
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (!(c in chars) )chars[c] = []
        chars[c].push(i)
    }
    
    for (let char in chars) {
        if (chars[char].length === 1) return chars[char]
    }
    return -1
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let charCount = {}
    
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === undefined) charCount[s[i]] = 0
        charCount[s[i]] += 1
    }
    for (let i = 0; i < t.length; i++) {
        if (charCount[t[i]] === undefined) return false
        
        charCount[t[i]] -= 1
        if (charCount[t[i]] < 0) return false
        
    }

    return true
};
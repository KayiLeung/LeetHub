/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const chars = {}
    
    for (let i = 0; i < magazine.length; i++) {
        if (chars[magazine[i]] === undefined) {
            chars[magazine[i]] = 0
        }
        chars[magazine[i]] += 1
        
    }
    
    for (let i = 0; i < ransomNote.length; i ++) {
        if (chars[ransomNote[i]] === undefined) {
            return false
        } else {
            chars[ransomNote[i]] -= 1
            if (chars[ransomNote[i]] < 0) return false
        }
    }
    
    return true
};
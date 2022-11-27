/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let chars = {}
    for (let char of magazine) {
        if (!chars.hasOwnProperty(char)) chars[char] = 0
        chars[char] += 1
    }
    for (let char of ransomNote) {
        if (!chars.hasOwnProperty(char)) return false
        chars[char] -= 1
        if (chars[char] < 0) return false
    }
    return true
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* frequency counter
    use hashmap to count each chars freq
    
*/
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let chars = {}
    for (let char of s) {
        if (!chars.hasOwnProperty(char)) chars[char] = 0
        chars[char] += 1
    }
    for (let char of t) {
        if (!chars.hasOwnProperty(char)) return false
        chars[char] -= 1
        if (chars[char] < 0) return false
    }
    return true
};
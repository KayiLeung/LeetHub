/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
    use hashmap, use char as key and count how many of that char appear in s
    literate t, if char in hashmap, it value minus 1 
    if char is not in hashmap return false
    literate hashmap and see is it all key's value equal to 0
    edge case:
    if s and t having different length, return false
    
*/
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let chars = {}
    
    for (let char of s) {
        if (!(char in chars)) chars[char] = 0
        chars[char] += 1
    }
    
    for (let char of t) {
        if (!(char in chars)) return false
        chars[char] -= 1
        if (chars[char] < 0) return false
    }
    
    return true
};
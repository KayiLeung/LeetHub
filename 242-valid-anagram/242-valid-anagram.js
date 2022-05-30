/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let charCount = {}
    
    for(let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === undefined) {
            charCount[s[i]] = 0
        } 
        charCount[s[i]] += 1
    }
    console.log(charCount)
    for (let i = 0; i < t.length; i++) {
        if (charCount[t[i]] === undefined ) {
            return false
        } else {
            charCount[t[i]] -= 1
        }
    }
    
    const values = Object.values(charCount)
    
    return values.every(el => el === 0)
};
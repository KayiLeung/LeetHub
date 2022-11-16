/**
 * @param {string} s
 * @return {boolean}
 */

/*

*/
var isPalindrome = function(s) {
    const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    
    let i = 0
    let j = str.length - 1
    
    while (i <= j) {
        if (str[i] !== str[j]) return false
        i++
        j--
    }
    return true
};
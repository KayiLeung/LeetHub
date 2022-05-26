/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
    // let newStr = s.replace(/ /g, '').toLowerCase()
    let i = 0
    let j = s.length - 1
    lowerCaseStr = s.toLowerCase()
    
    while(i < j) {
        const start = lowerCaseStr[i]
        const end = lowerCaseStr[j]
        
        if (!alpha.includes(start)) {
            i++
        } else if (!alpha.includes(end)) {
            j--
        } else if (start === end) {
            i++
            j--
        } else {
            return false
        }
    }
    
    return true
};
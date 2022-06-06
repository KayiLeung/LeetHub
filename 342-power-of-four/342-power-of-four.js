/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n < 0) return false
    let i = 0
    
    while (4**i <= n) {
        if (4**i === n) return true
        i++
    }
    
    return false
};
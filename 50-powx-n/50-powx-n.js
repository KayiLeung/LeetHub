/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1
    let pow = Math.abs(n)
    
    let ans = 1.00
    
    while (pow > 0) {
        if (pow % 2 === 1) {
            ans = ans*x
            x = x*x
            pow = Math.floor(pow / 2)
        } else {
            x = x*x
            pow = pow / 2
        }
    }
    return n > 0 ? ans : 1/ans
}
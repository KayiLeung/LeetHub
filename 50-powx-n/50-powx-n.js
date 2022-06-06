/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1
    let pow = Math.abs(n)
    let res
    pow % 2 === 1 ? res = myPow(x*x, (pow - 1)/2)*x : res = myPow(x*x, pow/2)
    
    return n > 0 ? res : 1/res
}
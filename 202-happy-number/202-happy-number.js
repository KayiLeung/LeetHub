/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, memo = {}) {
    if (memo[String(n)]) return false
    if (n === 1) return true    
    let sum = 0
    if(!(n in memo)) memo[n] = 0
    while (n > 9) {
        const dig = n % 10
        
        sum += dig*dig
        n = (n - dig)/10
    }
    memo[n] = sum
    sum += n*n
    return isHappy(sum, memo)
};
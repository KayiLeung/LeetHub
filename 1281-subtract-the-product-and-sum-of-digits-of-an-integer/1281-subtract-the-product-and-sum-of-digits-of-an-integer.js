/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0
    let product = 1
    
    while ( n > 0) {
        const digit = n % 10
        n = (n - digit) / 10
        sum += digit
        product *= digit
    }

    return product - sum
};
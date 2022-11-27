/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity
    let max = -Infinity
    
    for (let p of prices) {
        min = Math.min(min, p)
        max = Math.max(max, p - min)
        
    }
    return max
};
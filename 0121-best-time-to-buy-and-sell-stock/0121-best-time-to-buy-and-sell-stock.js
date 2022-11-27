/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]
    let max = 0
    
    for (let p of prices) {
        max = Math.max(max, p - min)
        min = Math.min(min, p)
    }
    return max
};
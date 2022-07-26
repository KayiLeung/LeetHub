/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity
    let best = 0
    
    for (let price of prices) {
        min = Math.min(min, price)
        best = Math.max(best, price - min)
    }
    return best
};
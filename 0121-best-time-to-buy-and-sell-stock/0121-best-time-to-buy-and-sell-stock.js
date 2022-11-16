/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity
    let maxProfit = 0
    
    for (let p of prices) {
        min = Math.min(p, min)
        const currProfit = p - min
        maxProfit = Math.max(maxProfit, currProfit)
    }
    return maxProfit
};
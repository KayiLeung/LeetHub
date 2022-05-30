/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowPrice = Infinity
    let max = 0
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowPrice) {
            lowPrice = prices[i]
        }
        
        max = Math.max(prices[i] - lowPrice, max)
    }
    return max
};
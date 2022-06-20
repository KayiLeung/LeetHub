/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    
    for (let i = 1; i <= amount; i++) {
        let minCoin = Infinity
        for (coin of coins) {
            if (coin > i) continue;
            minCoin = Math.min(minCoin, dp[i - coin])
        }
        dp[i] = minCoin + 1
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount]
};
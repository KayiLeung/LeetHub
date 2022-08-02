/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    
    dp[0] = 0
    
    
    for (let i = 1; i <= amount; i++) {
//         i is the curr amount, so if coin is larger than i, means that it could be to give change
        let minChange = Infinity
        for (let coin of coins) {
            
            if (coin > i) continue;
            minChange = Math.min(minChange, dp[i - coin])
        }
        dp[i] = minChange + 1
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount]
};
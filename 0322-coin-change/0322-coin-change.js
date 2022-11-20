/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*
    dp, create an array and equal to amount + 1
    dp[0] = 0 means at amount 0, 0 coin needed
    literate throught the amount and literate all possible coin in coins
    if coin is greater than i continue
    if not, look for 
*/
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    
    for (let i = 1; i <= amount; i++) {
        let min = Infinity
        for (let coin of coins) {
            if (coin > i) continue
            min = Math.min(min, dp[i - coin])
        }
        dp[i] = min + 1
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};


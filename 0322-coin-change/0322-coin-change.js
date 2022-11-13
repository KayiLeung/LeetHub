/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let res = _coinChange(coins, amount)
    return res === Infinity ? -1 : res
};

const _coinChange = (coins, amount, memo = {}) => {
    if (amount === 0) return 0
    if (amount < 0) return Infinity
    
    if (amount in memo) return memo[amount]
    let min = Infinity
    for (const coin of coins) {
        curr = 1 + _coinChange(coins, amount - coin, memo)
        min = Math.min(curr, min)
    }
    
    
    
    memo[amount] = min
    
    return memo[amount]
}
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*
    
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
    for (let coin of coins) {
        let curr = 1 + _coinChange(coins, amount - coin, memo)
        min = Math.min(min, curr)
    }
    memo[amount] = min
    return memo[amount]
}
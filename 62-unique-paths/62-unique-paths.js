/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, memo ={}) {
    if (n === 1 || m === 1) return 1
    let key = m + ',' + n
    if (key in memo) return memo[key]
    
    memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo)
    return memo[key]
};
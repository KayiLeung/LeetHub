/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    let m = mat.length
    let n = mat[0].length
    dp = Array(m)
    
    for (let i = 0; i < m ; i++) {
        let sum = 0
        dp[i] = Array(n).fill(0)
        for(let j = 0; j < n; j++) {
            dp[i][j] += mat[i][j] + sum
            sum = dp[i][j]
        }
    } 
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] += dp[i - 1][j]
        }
    }
    for (let i = 0; i < m; i++) {
        let r1 = Math.max(0, i - k)
        let r2 = Math.min(m - 1, i + k)
        for (let j = 0; j < n; j++) {
            let c1 = Math.max(0, j - k)
            let c2 = Math.min(n - 1, j + k)
            
            let value = dp[r2][c2]
            
            if (r1 - 1 >= 0) {
                value -= dp[r1 -1][c2]
            }
            if (c1 - 1 >= 0) {
                value -= dp[r2][c1 - 1]
            }
            if (r1 - 1 >= 0 && c1 - 1 >= 0) {
                value += dp[r1 - 1][c1 - 1]
            }
            mat[i][j] = value
        }
    }
    return mat
};

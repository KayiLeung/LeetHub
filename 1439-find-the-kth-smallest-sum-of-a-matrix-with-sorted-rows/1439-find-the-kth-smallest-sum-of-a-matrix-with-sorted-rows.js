/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(mat, k) {
    let dp = [0]
    
    for (const i in mat) {
        
        dp = handler(i)
    }
    
    return dp[k - 1]
    
    function handler(i, row = [], n = mat[0]) {
        for (const j in n) {
            for (const p of dp) {
                row.push(p + mat[i][j])
            }
        }
    
        row = row.sort((a, b) => a - b)
    
        return k < row.length ? row.slice(0, k) : row
    }
};
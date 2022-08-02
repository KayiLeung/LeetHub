/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const r = matrix.length
    const c = matrix[0].length
    
    let start = 0
    let end = r * c - 1
    
    while (start <= end) {
        const mid = Math.floor((start + end) /2)
        const row = Math.floor(mid/c)
        const col = mid % c
        const val = matrix[row][col] 
        if ( val === target) {
            return true
        } else if (val < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return false
};
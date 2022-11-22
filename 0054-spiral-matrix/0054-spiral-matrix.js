/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/* dir for right down left up
while hit the edge change direction
reasigin visited pos to '*', if hit '*' change direction
return result until res.length === to matrix.length * matrix[0].length
*/
var spiralOrder = function(matrix) {
    const directions =[ [0, 1], [1,0],[0, -1],[-1,0]]
    let i = 0
    const m = matrix.length
    const n = matrix[0].length
    const max = m * n
    // let res = Array(matrix.length * matrix[0].length).fill(null)
    let res = [matrix[0][0]]
    matrix[0][0] = '*'
    let curr = [0, 0]
    const inbound = (r, c, er, ec) => {
        return r >= 0 && c >= 0 && r < er && c < ec
    }
    
    while (res.length < max) {
        const [dr, dc] = directions[i]
        const [r ,c] = curr
        const row = dr + r, col = dc + c
        if (inbound(row, col, m, n) && matrix[row][col] !== '*') {
            res.push(matrix[row][col])
            matrix[row][col] = '*'
            curr = [row, col]
        } else {
            i = (i + 1) % 4
        }
    }
    return res
};
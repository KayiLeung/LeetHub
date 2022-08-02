/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let size = r * c
    
    let mSize = mat.length * mat[0].length
    if (size !== mSize) return mat
    
    let res = []

    let flatted = mat.flatMap(n => n)

    let start = 0
    let end = c
    for (let i = 0; i < r; i++) {
        res.push(flatted.slice(start, end))
        start = end
        end += c
    }
    return res
};
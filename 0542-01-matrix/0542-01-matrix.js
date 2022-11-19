/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const er = mat.length
    const ec = mat[0].length
    
    for (let r = 0; r < er; r++) {
        for (let c = 0; c < ec; c++) {
            if (mat[r][c] === 0) continue
            const top = (r - 1 >= 0) ? mat[r - 1][c] : Infinity
            const left = (c - 1 >= 0) ? mat[r][c - 1] : Infinity
            mat[r][c] = Math.min(top, left) + 1
        }
    }

    for (let r = er - 1; r >= 0; r--) {
        for (let c = ec - 1; c >= 0; c--) {
            if (mat[r][c] === 0) continue
            const bottom = (r + 1 < er) ? mat[r + 1][c] : Infinity
            const right = (c + 1 < ec) ? mat[r][c + 1] : Infinity
            mat[r][c] = Math.min((Math.min(bottom, right) + 1), mat[r][c])
        }
    }
    return mat
};


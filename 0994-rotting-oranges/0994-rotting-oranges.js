/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let rotten = []
    let fresh = 0
    let res = 0
    const check = new Set()
    const er = grid.length
    const ec = grid[0].length
    
    const deltas = [[1,0],[0,1],[0,-1],[-1,0]]
    const inbound = (r, c, m, n) => {
        return r >= 0 && c >= 0 && r < m && c < n
    }
    for (let r = 0; r < er; r++) {
        for (let c = 0; c < ec; c++) {
            if (grid[r][c] === 2) {
                rotten.push([r, c])
            }
            if (grid[r][c] === 1) fresh++
        }
    }
    if (fresh === 0) return 0
    while (rotten.length > 0 && fresh > 0) {
        
        let len = rotten.length
        while (len > 0) {
            const [r, c] = rotten.shift()
            len--
            for (const [dr, dc] of deltas) {
                const newRow = dr + r
                const newCol = dc + c
                if (inbound(newRow, newCol, er, ec)) {
                    const pos = newRow + ',' + newCol
                    if (check.has(pos)) continue
                    if (grid[newRow][newCol] === 1) {
                        rotten.push([newRow, newCol])
                        grid[newRow][newCol] = 2
                        fresh--
                    }
                    check.add(pos)
                }
            }
            
        }
        res++
    }
    return fresh === 0 ? res : -1
};
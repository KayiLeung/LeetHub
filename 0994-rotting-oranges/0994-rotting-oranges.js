/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let rotten = []
    let fresh = 0
    let min = 0
    let visited = new Set()
    const m = grid.length
    const n = grid[0].length
    const deltas = [[1, 0], [0, 1],[-1, 0],[0, -1]]
    
    
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 2) {
                rotten.push([r, c])
                visited.add(r + ',' + c)
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
                const newR = r + dr
                const newC = c + dc
                if (inbound(newR, newC, m, n)) {
                    const pos = newR + ',' + newC
                    if (visited.has(pos)) continue
                    if (grid[newR][newC] === 1) {
                        rotten.push([newR, newC])
                        grid[newR][newC] = 2
                        fresh--
                    }
                    visited.add(pos)
                }
            }
        }
        min++
    }

    return fresh > 0 ? -1 : min
};

const inbound = (r, c, er, ec) => {
    return r >= 0 && c >= 0 && r < er && c < ec
}
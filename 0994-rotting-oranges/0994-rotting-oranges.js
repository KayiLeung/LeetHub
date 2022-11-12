/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let rotten = []
    let fresh = 0
    const m = grid.length, n = grid[0].length
    let checked = new Set()
    let min = 0
    
    for (let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                rotten.push([i, j])
                const pos = i + ',' + j
                checked.add(pos)
                
            } else if (grid[i][j] == 1) {
                fresh++
            }
        }
    }
    const t = rotten[0]

    if (fresh === 0) return 0
    
    const deltas = [[1,0], [0,1],[-1,0],[0,-1]]
    const inbound = (r, c, er, ec) => {
        return r >= 0 && c >= 0 && r < er && c < ec
    }
    
    while (fresh > 0 && rotten.length > 0) {
        let currRotten = rotten.length
        while (currRotten > 0) {
            const [r, c] = rotten.shift()
            currRotten--
            for (const [dr, dc] of deltas) {
                const row = r + dr
                const col = c + dc

                if (inbound(row, col, m, n)) {
                    const pos = row + ',' + col
                    if (checked.has(pos)) continue
                    if (grid[row][col] == 1) {
                        rotten.push([row, col])
                        grid[row][col] = 2
                        fresh--
                    }
                    checked.add(pos)
                }
            }
        }
        min++
    }
    
    return fresh === 0 ? min : -1
};
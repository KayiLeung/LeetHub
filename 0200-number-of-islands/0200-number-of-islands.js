/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    let visited = new Set()
    const m = grid.length
    const n = grid[0].length
    
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== '0' && explore(r , c, m, n, grid, visited)) count++
        }
    }
    
    return count
};

const inbound = (row, col, er, ec) => {
    return row >= 0 && col >= 0 && row < er && col < ec
}

const explore = (r, c, m, n, grid, visited) => {
    if (!inbound(r, c, m, n) || grid[r][c] === "0") return false
    const pos = r + ',' + c
    if (visited.has(pos)) return false
    visited.add(pos)
    
    explore(r - 1, c, m, n, grid, visited)
    explore(r + 1, c, m, n, grid, visited)
    explore(r, c - 1, m, n, grid, visited)
    explore(r, c + 1, m, n, grid, visited)
    
    return true
}
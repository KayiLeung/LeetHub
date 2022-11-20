/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    const visited = new Set()
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] !== '0') {
                if (travsal(r, c, grid, visited)) count++
            }
        }
    }
    return count
};
const inbound = (row, col, m, n) => {
    return row >= 0 && col >= 0 && row < m && col < n
}

const travsal = (r, c, grid, visited) => {
    if (!inbound(r, c, grid.length, grid[0].length)) return false
    if (grid[r][c] !== '1') return false
    const pos = r + ',' + c
    if (visited.has(pos)) return false
    visited.add(pos)
    
    
    travsal(r + 1, c, grid, visited)
    travsal(r - 1, c, grid, visited)
    travsal(r, c + 1, grid, visited)
    travsal(r, c - 1, grid, visited)
    
    return true
}
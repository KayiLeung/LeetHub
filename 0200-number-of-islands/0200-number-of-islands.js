/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visited = new Set()
    let count = 0
    
    for (let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if (explore(i, j, grid, visited)) count++
        }
    }
    return count
};



const explore = (r, c, grid, visited) => {
    const rowInbound = r >= 0 && r < grid.length
    const colInbound = c >= 0 && c < grid[0].length
    
    if (!rowInbound || !colInbound) return false
    const pos = r + ',' + c
    if (visited.has(pos)) return false
    visited.add(pos)
    
    if (grid[r][c] === '0') return false
    
    explore(r + 1, c, grid, visited)
    explore(r - 1, c, grid, visited)
    explore(r, c + 1, grid, visited)
    explore(r, c - 1, grid, visited)
    
    return true
}
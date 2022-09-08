/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0
    let visited = new Set()
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++){
            if(_numIslands(grid, row, col, visited) === true) res++
        }
    }
    
    return res;
}

const _numIslands = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length
    const colInbounds = 0 <= c && c < grid[0].lenght
    if (!rowInbounds && !colInbounds) return false
    if (grid[r][c] !== '1') return false
    const pos = r + ',' + c
    if (visited.has(pos)) return false
    visited.add(pos)
    
    
    
    
    _numIslands(grid, r - 1, c, visited)
    _numIslands(grid, r + 1, c, visited)
    _numIslands(grid, r, c - 1, visited)
    _numIslands(grid, r, c + 1, visited)
    
    return true
}
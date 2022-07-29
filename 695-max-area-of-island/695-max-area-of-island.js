/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let visited = new Set()
    let island = 0
    for (let r = 0; r < grid.length; r++) {
        for(let c =0; c < grid[0].length; c++) {
            let curr = explore(grid, r, c, visited)
            island = Math.max(island, curr)
        }
    }
    
    return island
};

const explore = (grid, r, c, visited) => {
    const rowInbound = 0 <= r && r < grid.length
    const colInbound = 0 <= c && c < grid[0].length
    
    if (!rowInbound || !colInbound ||grid[r][c] === 0) return 0
    const pos = r + ',' + c
    if (visited.has(pos)) return 0
    visited.add(pos)
    let size = 1
    size += explore(grid, r - 1, c, visited)
    size += explore(grid, r + 1, c, visited)
    size += explore(grid, r, c - 1, visited)
    size += explore(grid, r, c + 1, visited)
    
    return size
}
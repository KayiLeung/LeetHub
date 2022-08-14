/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    if (grid.length < 3 || grid[0].length < 3) return 0    
    let count = 0
    
    for (let i = 0; i < grid.length - 2; i++) {
        for(let j = 0; j < grid[0].length - 2; j++) {
            if (isMagic(grid, i , j) && unqiueNum(grid, i, j)) count++
        }
    }
    return count
}
const unqiueNum = (grid, i, j) => {
    let numSet = new Set()
    for (let a = i; a <=i + 2; a++) {
        for(let b = j; b <= j + 2; b++) {
            if(grid[a][b] >= 1 && grid[a][b] <= 9) numSet.add(grid[a][b]);
        }
    }
    return numSet.size === 9 ? true : false
}

const isMagic = (grid, i , j) => {
    return (isRow(grid, i , j) && isColumn (grid, i , j) && isDiagonal(grid, i , j) )
    
}

const isRow = (grid, i , j ) => {
    const row1 = grid[i][j] + grid[i][j + 1] + grid[i][j + 2] === 15 ? true : false
    const row2 = grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2] === 15 ? true : false
    const row3 = grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2] === 15 ? true : false
    
    
    return row1 && row2 && row3
}

const isColumn = (grid, i , j) => {
    const col1 = grid[i][j]     + grid[i + 1][j]     + grid[i + 2][j] === 15 ? true : false
    const col2 = grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1] === 15 ? true : false
    const col3 = grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2] === 15 ? true : false
    
    if (!col1 || !col2 || !col3) return false
    return true
}

const isDiagonal = (grid, i ,j) => {
    const upD = grid[i][j] + grid[i+1][j+1] + grid[i + 2][j + 2] === 15 ? true : false
    const downD = grid[i+2][j] + grid[i+1][j+1] + grid[i][j + 2] === 15 ? true : false
    if (!upD || !downD) return false
    return true
}
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++){
            if (grid[row][col] === '1') {
                res += 1
                _numIslands(row, col)
            } 
        }
    }
    
    return res;


   function _numIslands(row , column){
    
    grid[row][column] = '0'
    
    if (grid?.[row + 1]?.[column] === "1") _numIslands(row + 1, column);
    if (grid?.[row - 1]?.[column] === "1") _numIslands(row - 1, column);
    if (grid?.[row]?.[column + 1] === "1") _numIslands(row, column + 1);
    if (grid?.[row]?.[column - 1] === "1") _numIslands(row, column - 1);
    return 
   }
}
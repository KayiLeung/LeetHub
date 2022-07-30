/**
 * @param {number[][]} grid
 * @return {number}
 */
const DIR = [
    [0,1],
    [0,-1],
    [1,0],
    [-1,0]
];

var flood = function(grid, row, col) {
    if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;
    if(grid[row][col] == 1) return;
    grid[row][col] = 1;
    for(const dir of DIR) {
        const newRow = row+dir[0];
        const newCol = col+dir[1];
        flood(grid, newRow, newCol);
    }
}

var closedIsland = function(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    // flood left/right
    for(let row=0; row<grid.length; row++) {
        flood(grid, row, 0);
        flood(grid, row, COLS-1);
    }
    // flood top/bottom
    
    for(let col=0; col<COLS; col++) {
        flood(grid, 0, col);
        flood(grid, ROWS-1, col);
    }
    console.log(grid)
    let ans = 0;
    for(let row=0; row<ROWS; row++) {
        for(let col=0; col<COLS; col++) {
            if(grid[row][col] == 0) {
                flood(grid, row, col);
                ans++;
            }
        }
    }
    return ans;
};
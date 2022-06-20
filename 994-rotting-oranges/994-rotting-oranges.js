/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const n = grid.length, m = grid[0].length;
    let minutes = 0;
    let fresh = [];
    const isRotten = (x, y) => x >= 0 && y >= 0 && x < n && y < m && grid[x][y] === 2;
    
    for(let i=0; i<n; i++)
        for(let j=0; j<m; j++)
            if (grid[i][j] === 1)
                fresh.push([i, j]);
    
    if (fresh.length === 0)
        return 0;
    
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    while(fresh.length) {
        let stillFresh = [];
        let aboutToRot = [];
        
        for (let curr of fresh) {
            let isGonnaRot = dirs.find(dir => isRotten(curr[0] + dir[0], curr[1] + dir[1]));
            if (isGonnaRot)
                aboutToRot.push(curr);
            else
                stillFresh.push(curr);
        }
        
        if (aboutToRot.length) {
            for(let r of aboutToRot)
                grid[r[0]][r[1]] = 2;
        } else {
            return -1;
        }
        
        fresh = stillFresh;
        minutes++;
    }
    
    return minutes;
};



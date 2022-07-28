/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length
    const n = grid[0].length
    let minutes = 0
    
    let fresh = 0
    let queue = []
    for (let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                fresh++
            } else if (grid[r][c] === 2){
                queue.push([r, c])
            }
        }
    }
    
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    
    while (queue.length && fresh) {
        minutes++;
        let curLen = queue.length;
        
        while (curLen--) {
            const [qr, qc] = queue.shift();
            
            for (const [dr, dc] of dirs) {
                const r = qr + dr;
                const c = qc + dc;
                
                if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] !== 1) {
                    continue;
                }
                
                grid[r][c] = 2;
                queue.push([r, c]);
                fresh--;
            }
        }
    }
    
    
    return fresh === 0 ? minutes : -1
};



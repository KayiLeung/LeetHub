/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length
    const n = grid[0].length
    let fresh = 0
    let queue = []
    let minute = 0
    
    for(let i = 0; i< m; i++) {
        for(let j = 0; j < n;j++) {
            if (grid[i][j] === 1) {
                fresh++
            }
            if (grid[i][j] === 2) {
                queue.push([i, j])
            }
        }
    }
     
    const dirs = [[0,1], [1,0], [-1,0],[0,-1]]
    while(queue.length > 0 && fresh) {
        minute++
        let currLen = queue.length
        while(currLen--) {
            const [x , y] = queue.shift()
            for (const [a, b] of dirs) {
                const newX = x + a
                const newY = y + b
                if (0 > newX || newX >= m || 0 > newY || newY >= n || grid[newX][newY] !== 1) continue
                grid[newX][newY] = 2
                fresh--
                queue.push([newX, newY])
            }
        }
            
    }
    return fresh === 0 ? minute : -1
    
};



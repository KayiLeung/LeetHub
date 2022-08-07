/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {

    // const r = mat.length
    // const c = mat[0].length
    // const isVaild = (x, y) => ( 0 <= x && x < r && 0 <= y && y < c)
    // const dirs = [ [0,1], [0,-1], [1,0], [-1,0] ]
    // const dis = new Array(r).fill(-1).map( () => new Array(c).fill(r * c))
    // const queue = []
    // for (let row = 0 ; row < r; row++) {
    //     for(let col = 0; col < c; col++) {
    //         if (mat[row][col] === 0) {
    //             queue.push([row, col])
    //             dis[row][col] = 0 
    //         }
    //     }
    // }
    // while (queue.length > 0) {
    //     const [x, y] = queue.shift()
    //     for (let dir of dirs) {
    //         const [dirX, dirY] = dir
    //         const X = dirX + x
    //         const Y = dirY + y
    //         if(isVaild(X, Y) && dis[x][y] + 1 < dis[X][Y]) {
    //            queue.push([X, Y]);
    //             dis[X][Y] = dis[x][y] + 1
    //            }
    //     }
    // }
    // return dis
    
const r = mat.length
    const c = mat[0].length
    
    for (let row = 0 ; row < r; row++) {
        for (let col = 0; col < c; col++) {
            if (mat[row][col] === 0)continue
            const top = (row - 1 >= 0) ? mat[row - 1][col] : Infinity
            const left = (col - 1 >= 0) ? mat[row][col - 1] :Infinity
            mat[row][col] = Math.min(top, left) + 1
        }
    }
    
    for (let row = r - 1 ; row >= 0; row--) {
        for (let col = c - 1; col >= 0 ; col--) {
            if (mat[row][col] === 0)continue
            const bottom = (row + 1 < r) ? mat[row + 1][col] : Infinity
            const right = (col + 1 < c) ? mat[row][col + 1] :Infinity
            mat[row][col] = Math.min(mat[row][col],( Math.min(bottom, right) + 1))
        }
    }
    return mat
};


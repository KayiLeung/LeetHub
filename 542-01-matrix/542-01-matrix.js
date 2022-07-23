/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
//     const m = mat.length, n = mat[0].length;
    
//     const isValid = (x, y) => !(x < 0 || y < 0 || x >= m || y >= n);
//     const dir = [0, 1, 0, -1, 0];
    
//     const MAX = m * n;
//     const dis = new Array(m).fill(-1).map(() => new Array(n).fill(MAX));
//     const Q = [];
    
//     mat.forEach((row, i) => {
//         row.forEach((el, j) => {
//             if(mat[i][j] == 0) {
//                 dis[i][j] = 0;
//                 Q.push([i, j]);
//             }
//         })
//     });
    
//     while(Q.length) {
//         const [x, y] = Q.shift();
//         const d = dis[x][y];
//         for(let i = 0; i < 4; i++) {
//             const X = x + dir[i], Y = y + dir[i+1];
//             if(isValid(X, Y) && d + 1 < dis[X][Y]) {
//                 Q.push([X, Y]);
//                 dis[X][Y] = d + 1;
//             }
//         }
//     }
    
//     return dis;
    const r = mat.length
    const c = mat[0].length
    const isVaild = (x, y) => ( 0 <= x && x < r && 0 <= y && y < c)
    const dirs = [ [0,1], [0,-1], [1,0], [-1,0] ]
    const dis = new Array(r).fill(-1).map( () => new Array(c).fill(r * c))
    const queue = []
    for (let row = 0 ; row < r; row++) {
        for(let col = 0; col < c; col++) {
            if (mat[row][col] === 0) {
                queue.push([row, col])
                dis[row][col] = 0 
            }
        }
    }
    while (queue.length > 0) {
        const [x, y] = queue.shift()
        for (let dir of dirs) {
            const [dirX, dirY] = dir
            const X = dirX + x
            const Y = dirY + y
            if(isVaild(X, Y) && dis[x][y] + 1 < dis[X][Y]) {
               queue.push([X, Y]);
                dis[X][Y] = dis[x][y] + 1
               }
        }
    }
    return dis
};


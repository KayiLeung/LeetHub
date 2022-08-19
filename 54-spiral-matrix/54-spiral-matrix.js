/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let row = matrix.length
    let col = matrix[0].length
    
    let res = []
    let size = row * col
    let x = 0
    let y = 0
    let X = 0
    let Y = 0
    let eX = row
    let eY = col
    while (res.length < size) {
        
        while(y < eY) {
            if (res.length == size)  return res
            res.push(matrix[x][y])
            y++
        }
        y -= 1
        x += 1
        while(x < eX) {
            if (res.length == size)  return res
            res.push(matrix[x][y])
            x++
        }
        x -= 1
        y -= 1

        while(y >= Y) {
            if (res.length == size)  return res
            res.push(matrix[x][y])
            y--
        }
        y += 1
        x -= 1
        while(x >= X + 1) {
            if (res.length == size)  return res
            res.push(matrix[x][y])
            x--
        }
        x += 1
        y += 1
        
        X += 1
        Y += 1
        eX -= 1
        eY -= 1
    }
        return res
}
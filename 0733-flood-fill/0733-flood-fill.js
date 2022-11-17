/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

/*
    bfs
    find the ele from the given pos, use bfs and look for the same ele from four direction, it the neighbors are same as old color, change to new color, if not, pass it
    edge case:
        if not of bound, stop search
        if the tile is not same as old color, stop the direction
        return while no more search
*/
var floodFill = function(image, sr, sc, color) {
    const oldColor = image[sr][sc]
    const er = image.length
    const ec = image[0].length
    
    bfs(image, sr, sc, color, oldColor, er, ec)
    

    
    return image
};

const inBound = (r, c, m , n) => {
    return r >= 0 && c >= 0 && r < m && c < n
}

const bfs = (image, sr, sc, color, oldColor, er, ec) => {
    if (!inBound(sr, sc, er, ec) || image[sr][sc] !== oldColor || image[sr][sc] === color) return 

    image[sr][sc] = color
    bfs(image, sr + 1, sc, color, oldColor, er, ec)
    bfs(image, sr - 1, sc, color, oldColor, er, ec)
    bfs(image, sr, sc + 1, color, oldColor, er, ec)
    bfs(image, sr, sc - 1, color, oldColor, er, ec)
}
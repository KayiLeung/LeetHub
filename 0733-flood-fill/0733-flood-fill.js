/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let visited = new Set()
    const oldColor = image[sr][sc]
    const m = image.length
    const n = image[0].length
    fillColor(image, sr,sc, color, oldColor, m , n)
    
    return image
};

const inbound = (r, c, er, ec) => {
    return r >= 0 && c >= 0 && er > r && ec > c
}

const fillColor = (image, sr, sc, color, old, m, n) => {
    if (!inbound(sr, sc, m, n) || image[sr][sc] !== old || image[sr][sc] === color) return
    
    image[sr][sc] = color
    fillColor(image, sr - 1, sc, color, old, m, n)
    fillColor(image, sr + 1, sc, color, old, m, n)
    fillColor(image, sr, sc - 1, color, old, m, n)
    fillColor(image, sr, sc + 1, color, old, m, n)
}
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
    
    fillColor(image, sr,sc, color, oldColor, visited)
    
    return image
};

const inbound = (r, c, er, ec) => {
    return r >= 0 && c >= 0 && er > r && ec > c
}

const fillColor = (image, sr, sc, color, old, visited) => {
    const pos = sr + ',' + sc
    if (!inbound(sr, sc, image.length, image[0].length)) return 
    if (pos in visited) return 
    visited.add(pos)
    if (image[sr][sc] !== old || image[sr][sc] === color) return
    image[sr][sc] = color
    fillColor(image, sr - 1, sc, color, old, visited)
    fillColor(image, sr + 1, sc, color, old, visited)
    fillColor(image, sr, sc - 1, color, old, visited)
    fillColor(image, sr, sc + 1, color, old, visited)
}
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const oldColor = image[sr][sc]
 fillColor(image, sr, sc, oldColor, newColor)
    return image
}

const fillColor = (image, x ,y, oldColor, newColor) => {
    const rowInbound = 0 <= x && x <image.length
    const colInbound = 0 <= y && y <image[0].length
    
    if (!rowInbound || !colInbound || image[x][y] !== oldColor || image[x][y] === newColor) return 
    image[x][y] = newColor
    
    fillColor(image, x - 1, y, oldColor, newColor)
    fillColor(image, x + 1, y, oldColor, newColor)
    fillColor(image, x, y + 1, oldColor, newColor)
    fillColor(image, x, y - 1, oldColor, newColor)
    
}
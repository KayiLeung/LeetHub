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

var fillColor = (image, x, y, oldColor, newColor) => {
    if (x < 0 || x >= image.length ||
        y < 0 || y >= image[0].length ||
        image[x][y] === newColor ||
        image[x][y] !== oldColor) {
        return 
    }
    image[x][y] = newColor
    
    fillColor (image, x + 1, y, oldColor, newColor)
    fillColor (image, x - 1, y, oldColor, newColor)
    fillColor (image, x, y + 1, oldColor, newColor)
    fillColor (image, x, y - 1, oldColor, newColor)
}
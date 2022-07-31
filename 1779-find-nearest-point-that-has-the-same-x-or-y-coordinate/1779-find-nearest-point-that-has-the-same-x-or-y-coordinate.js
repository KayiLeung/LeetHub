/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let min = Infinity
    let res = 0
    for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i]
        if (p[0] === x || p[1] === y) {
            const distance = Math.abs(p[0] - x) + Math.abs(p[1] - y)
            if (min >= distance) {
                min = distance
                res = i
            } 
        }
    }
    return min === Infinity ? -1 : res
};
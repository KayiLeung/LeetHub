/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let i = 0
    while (i < intervals.length) {
        const [a, b] = intervals[i]
        const [x, y] = newInterval
        
        if ((a <= x && x <= b) || (a <= y && y <= b) || (x <= a && a <= y) || (x <= b && b <= y)) {
            newInterval[0] = Math.min(a, x)
            newInterval[1] = Math.max(b, y)
            intervals.splice(i , 1)
        } else {
            i++
        }
    }
    intervals.push(newInterval)
    return intervals.sort((a, b) => a[0] - b[0])
};
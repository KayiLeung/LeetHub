/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a , b) => a[0] - b[0])
    
    let merged = [intervals[0]]
    
    for (let i = 1; i < intervals.length; i++) {
        const [a , b] = intervals[i]
        const [x , y] = merged[merged.length - 1]
        
        if (x <= a && a <= y) {
            const max = Math.max(b, y)
            merged[merged.length - 1] = [x, max]
        } else {
            merged.push(intervals[i])
        }
    }
    return merged
};
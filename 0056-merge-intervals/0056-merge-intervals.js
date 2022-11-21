/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length < 2) return intervals
    intervals.sort((a , b) => a[0] - b[0])
    
    let merged = [intervals[0]]
    
    for (let i = 1; i < intervals.length; i++) {
        const [a, b] = merged.at(-1)
        const [x, y] = intervals[i]
        
        if (b >= x) {
            const max = Math.max(b, y)
            merged.at(-1)[1] = max
        } else {
            merged.push(intervals[i])
        }
    }
    return merged
};
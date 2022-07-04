/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length < 2) return intervals
    
    intervals.sort( (a, b) => a[0] - b[0] )
    
    const merged = [intervals[0]]
    
    for (let i = 1; i < intervals.length; i++) {
        const cur = intervals[i]
        const top = merged[merged.length - 1];
        
        if (top[1] >= cur[0]) {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], cur[1])
        } else {
            merged.push(cur)
        }
    }
    return merged
};


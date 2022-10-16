/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const len = intervals.length
    if (len < 2) return len
    
    const start = [], end = []
    
    for (let i = 0 ; i < len; i++) {
        const [s , e] = intervals[i]
        start.push(s)
        end.push(e)
    }
    start.sort((a , b) => a - b)
    end.sort((a, b) => a - b)
    
    let count = 0
    let endPointer = 0
    
    for (const s of start) {
        if (end[endPointer] > s) count++
        else endPointer++
    }
    return count
};
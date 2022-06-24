/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let i = 0 
    let insert 
    while (i < intervals.length){
        let [a,b] = intervals[i]
        let [x,y] = newInterval

        if ((a >= x && a <= y ) ||
            (b >= x && b <= y) ||
            (x >= a && x <= b) ||
            (y >= a && y <= b)
           ) {
            newInterval = mergeInterval(intervals[i], newInterval)
            intervals.splice(i, 1);
             } else {
                 i++
             }
        
    }
    intervals.push(newInterval)
    return intervals.sort((a,b) => a[0] - b[0])
};

const mergeInterval = (int1, int2) => [
    Math.min(int1[0], int2[0]), Math.max(int1[1], int2[1])
]




/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    // looking for how many overlapped meetings 
    //0.    5.   15.  
    //10.   20.   30. 
    // how many rooms need by looking for how the first meeting endtime
    let startTime = []
    let endTime = []
    
    for (let [start, end] of intervals) {
        startTime.push(start) // [0, 5, 15]
        endTime.push(end) // [30, 10, 20]
    }
    
    startTime.sort((a , b) => a - b) //[0,5, 15] => n log n
    endTime.sort((a, b) => a - b) //[10, 20, 30] => n log n
    let endIndex = 0
    let rooms = 0
    
    for (let s of startTime) {              //15
        if (s < endTime[endIndex]) {    // 15 < 10  => free room released
            rooms++                     //2
        } else {
            endIndex++
        }
    }
    
    return rooms
};
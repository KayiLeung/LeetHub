/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    let operations = [60, 15, 5, 1]
    a = current.split(":")
    b = correct.split(":")
    let diff = (b[1] - a[1]) + ((b[0] - a[0])*60)
    console.log(diff)
    
    count = 0
    
    for (let o of operations) {
        while (diff >= o) {
                diff -= o
                count++
        }
    }
    return count
};

//         while(minDifference >= difference){
//             minDifference -= difference;
//             operations++;
//         }
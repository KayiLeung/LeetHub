/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity
    let curr = 0
    
    for (let n of nums) {
        curr += n
        max = Math.max(max, curr)
        if (curr < 0) curr = 0
    }
    return max
};
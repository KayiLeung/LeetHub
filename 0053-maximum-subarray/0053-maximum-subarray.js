/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity
    let curr = 0
    for (let n of nums) {
        if (curr + n < 0) {
            curr = 0
            continue
        } else {
            curr += n
            
        }
        max = Math.max(max, curr)
    }
    if (max === -Infinity) {
        nums.sort((a , b) => a - b)
        return nums.at(-1)
    }
    return max
};
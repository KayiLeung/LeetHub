/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity

    let currSum = 0
    for (let num of nums) {
        currSum += num
        if (currSum < 0) {
            max = Math.max(currSum, max)
            currSum = 0
        } else {
            max = Math.max(currSum, max)
        }
    }
    return max
}
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let maxSum = -Infinity
//     let i = 0
    
//     while (i < nums.length) {
       
//     }
//     return maxSum
// };


var maxSubArray = function(nums) {
    let currentSum = 0
    let max = -Infinity
    
    for (num of nums) {
        currentSum += num
        if (currentSum < 0) {
            max = Math.max(max, currentSum)
            currentSum = 0
        } else {
            max = Math.max(max, currentSum)
        }
    }
    
    return max
}

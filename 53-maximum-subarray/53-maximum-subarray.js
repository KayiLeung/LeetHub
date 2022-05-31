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
    let maxSum = -Infinity
    let current = 0
    let i = 0
    
    while ( i < nums.length) {
        current += nums[i]

        maxSum = Math.max(current, maxSum)
        if (current < 0) {
            current = 0
        }
        
        i++
        
    }
    return maxSum
}

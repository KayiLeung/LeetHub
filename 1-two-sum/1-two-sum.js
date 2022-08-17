/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let prev = {}
    
    for (let i = 0; i < nums.length; i ++) {
        const num = nums[i]
        const reminder = target - num
        if ((reminder in prev)) return [prev[reminder], i]
        prev[num] = i
    }
};
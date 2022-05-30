/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const prevNums = {}
    
    for(let i = 0; i < nums.length; i++ ) {
        const num = nums[i]
        const subTarget = target - num
        if (prevNums.hasOwnProperty(subTarget)) {
            return [prevNums[subTarget], i]
        } else {
            prevNums[num] = i
        }
    }
    
    
};
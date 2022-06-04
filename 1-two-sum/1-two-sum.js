/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let prevNums = {}
    
    for (let i = 0; i < nums.length; i++) {
        let subTarget = target - nums[i]
        if (prevNums.hasOwnProperty(subTarget)) {
            return [prevNums[subTarget], i]
        } else {
            prevNums[nums[i]] = i
        }
    }
    
};
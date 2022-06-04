/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let prevNums = {}
    
    for (let i = 0; i < nums.length; i++) {
        let subTarget = target - nums[i]
        if (prevNums[subTarget] === undefined) {
            prevNums[nums[i]] = i
        } else {
            return [prevNums[subTarget], i]
        }
    }
    
};
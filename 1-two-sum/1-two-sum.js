/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let prevElement = {}
    
    for (let i = 0; i < nums.length; i++) {
        const subTarget = target - nums[i]
        if (prevElement[subTarget] === undefined) {
            prevElement[nums[i]] = i 
        } else {
            return [prevElement[subTarget], i]
        }
    }
    
    
};
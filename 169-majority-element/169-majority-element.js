/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const numsCount = {}
    const half = Math.floor(nums.length / 2)

    
    for (let num of nums) {
        numsCount[num] = numsCount[num] + 1 || 1
        
        if (numsCount[num] > half) {
            return num
        }

    }
    
    
};
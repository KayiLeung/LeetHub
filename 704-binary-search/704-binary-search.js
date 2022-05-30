/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, res = 0) {

    let start = 0
    let end = nums.length  -1
    let med
    
    while (start <= end) {
        med = Math.floor((start + end) / 2)
        if (nums[med] === target)
            return med
        else if (nums[med] < target) {
            start = med + 1  
        } else {
            end = med - 1
        }
    }

    

    return -1
};
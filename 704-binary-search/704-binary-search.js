/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, res = 0) {
    let start = 0
    let end = nums.length -1
    let mid
    
    while (start <= end) {
        mid = Math.floor((start + end) /2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1
};
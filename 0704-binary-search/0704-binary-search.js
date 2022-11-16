/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
    look for mid of nums, if mid is equal to target, return mid
    if small than target, set start as mid + 1
    if bigger that target, set end as mid
    if target cannot be found, return -1
*/
var search = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        const curr = nums[mid]
        if (curr === target) {
            return mid
        } else if (curr > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1
};
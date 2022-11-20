/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    while (left < right) {
        const mid = ~~((left + right) / 2)
        if (nums[left] < nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid
            } else {
                left = mid + 1
            }
        } else {
            if (nums[mid + 1] <= target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
    }
    return nums[left] === target ? left : -1
};
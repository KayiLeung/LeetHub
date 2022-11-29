/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0
    let right = nums.length - 1
    let i = left
    
    while (i <= right) {
        switch(nums[i]) {
            case 0:
                [nums[left], nums[i]] = [nums[i], nums[left]]
                left++
                i++
                break;
            case 1:
                i++
                break;
            case 2:
                [nums[i], nums[right]] = [nums[right], nums[i]]
                right--
                break;
        }
    }
    return nums
};
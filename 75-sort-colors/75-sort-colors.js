/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let sorted = false
    
    while(!sorted) {
        sorted = true
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                const temp = nums[i]
                nums[i] = nums[i + 1]
                nums[i + 1] = temp
                sorted = false
            }
        }
    }
    return nums
};
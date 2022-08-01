/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (nums.length > k) {
        const split = nums.splice(nums.length - k)
        nums.unshift(...split)
    } else {
        for(let i = 0;i < k - nums.length; i++) {
            let temp = nums.pop()
            nums.unshift(temp)
        }
    }
    return nums
};
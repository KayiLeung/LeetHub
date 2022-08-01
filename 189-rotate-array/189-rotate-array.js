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
        const len = k % nums.length
        for(let i = 0;i < len; i++) {
            let temp = nums.pop()
            nums.unshift(temp)
        }
    }

    return nums
};
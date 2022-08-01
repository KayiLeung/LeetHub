/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zIdx = []
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        
        if (num === 0) {
            zIdx.push(i)
        } else if (zIdx.length) {
            const first = zIdx[0]
            nums[first] = num
            nums[i] = 0
            zIdx.shift()
            zIdx.push(i)
        }
    }
    return nums
    
};
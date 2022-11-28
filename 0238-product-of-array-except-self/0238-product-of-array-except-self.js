/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const size = nums.length
    let res = new Array(size).fill(1)
    
    let tallyUp = 1
    let tallyDown = 1
    
    for (let i = 1; i < size; i++) {
        tallyUp *= nums[i - 1]
        res[i] *= tallyUp
    }
    
    for (let j = size - 2; j >= 0; j--) {
        tallyDown *= nums[j + 1]
        res[j] *= tallyDown
    }
    
    return res
};
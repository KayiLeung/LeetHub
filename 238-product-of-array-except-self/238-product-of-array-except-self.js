/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length).fill(1)
    let tallyUp = 1
    let tallyDown = 1
    
    for (let i = 1, j = nums.length - 2; i < nums.length; i++, j--) {
        tallyUp *= nums[i - 1];
        tallyDown *= nums[j + 1];
        answer[i] *= tallyUp;
        answer[j] *= tallyDown;
    }
    return answer
    
};
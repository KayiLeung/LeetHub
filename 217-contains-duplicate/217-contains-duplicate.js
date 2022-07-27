/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   nums = nums.sort((a, b) =>  a- b)
    
    let i = 0
    let j = nums.length - 1
    
    while (i <= j) {
        if (nums[i] === nums[ i + 1]) return true
        if (nums[j] === nums[j - 1]) return true
        
        i++
        j--
    }
    return false
};
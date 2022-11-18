/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const unqiue = new Set(nums)
    
    return unqiue.size === nums.length ? false : true
};
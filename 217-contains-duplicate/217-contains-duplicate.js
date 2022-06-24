/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   const numsSet = new Set(nums)
   
   return nums.length !== numsSet.size
};
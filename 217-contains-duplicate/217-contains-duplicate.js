/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let arrSet = new Set(nums)
   return arrSet.size !== nums.length
};
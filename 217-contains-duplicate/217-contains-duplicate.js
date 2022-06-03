/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var numsSet = new Set(nums)
    return numsSet.size !== nums.length
}
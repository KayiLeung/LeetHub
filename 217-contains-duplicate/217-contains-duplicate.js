/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numCount = {}
    
    for (num of nums) {
        if (numCount[num] === undefined) {
            numCount[num] = 1
        } else {
            return true
        }
    }
    return false
};
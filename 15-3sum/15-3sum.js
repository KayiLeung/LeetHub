/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    let i = 0
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1
        let right = nums.length - 1
        if (i > 0 && nums[i] === nums[i - 1]) continue
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                res.push([nums[i] , nums[left] , nums[right]])
                left++
                while (nums[left] === nums[left - 1] && left < right) left++
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return res
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1
        let k = nums.length - 1
        if (i > 0 && nums[i] === nums[i - 1]) continue
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            if (sum === 0) {
                res.push([nums[i] ,nums[j] , nums[k]])
                j++
                while (nums[j] === nums[j - 1] && j < k)j++
            } else if (sum > 0) {
                k--
            } else {
                j++
            }
        }
    }
    return res
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    nums.sort((a, b) => a - b)
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            const first = nums[i]
            const second = nums[j]
            const third = nums[k]
            const sum = first + second + third
            if (sum === 0) {
                res.push([first, second, third])
                while (nums[j] === nums[j + 1] && j < k)j++
                j++
            } else if (sum > 0) {
                k--
            } else {
                j++
            }
        }
    }
    return res
};
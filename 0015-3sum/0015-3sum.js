/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    let res = []
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1])continue
        let j = i + 1
        let end = nums.length - 1
        const first = nums[i]
        while (j < end) {
            const second = nums[j]
            const last = nums[end]
            const sum = first + second + last

            if (sum === 0) {
                res.push([first, second, last])
                while(nums[j] === nums[j + 1] && j < end)j++
                j++
            } else if (sum > 0) {
                end--
            } else {
                j++
            }
        }
    }
    return res
};
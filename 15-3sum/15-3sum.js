/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return []
    let res = []
    
    nums = nums.sort( (a, b) => a - b)
    
    let i = 0
    for (let i = 0; i < nums.length; i++) {
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
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length <= 1) return [nums]
    let res = []
    
    const rest = permute(nums.slice(1))
    const first = nums[0]
    for (let r of rest) {
        for (let i = 0; i <= r.length; i++) {
            res.push([...r.slice(i), first, ...r.slice(0, i)])
        }
    }
    return res
};
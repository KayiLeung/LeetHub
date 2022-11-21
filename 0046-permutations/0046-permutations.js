/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) return [[]]
    const res = []
    const first = nums[0]
    const permsWithoutFirst = permute(nums.slice(1))
    
    for (let perm of permsWithoutFirst) {
        for (let i = 0; i <= perm.length; i++) {
            res.push([...perm.slice(i), first, ...perm.slice(0, i)])
        }
    }
    return res
};
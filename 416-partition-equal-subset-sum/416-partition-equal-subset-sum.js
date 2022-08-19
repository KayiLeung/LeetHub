/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let total = 0
    for(let num of nums) {
        total += num
    }
    if (total % 2 !== 0 ) return false
    
    let mid = total / 2
    
    let everySum = new Set([0])
    
    for(let i = nums.length - 1; i>=0;i--) {
        const nextSums = new Set()
        for (const sum of everySum) {
            if(nums[i] + sum === mid) return true
            nextSums.add(sum)
            nextSums.add(sum + nums[i])
        }
        everySum = nextSums
    }
    
    return everySum.has(mid)
};
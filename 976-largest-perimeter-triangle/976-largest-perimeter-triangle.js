/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums = nums.sort((a, b) => a - b)
    
    let res = []
    for (let i = 0; i < nums.length - 2; i++) {
        const first = nums[i]
        const second = nums[i + 1]
        const third = nums[i + 2]
        if((first + second > third) &&
           (second + third > first) &&
           (first + third > second)) {
            res.push(first + second + third)
        }
    }
    return res.length === 0 ? 0 : Math.max(...res)
};
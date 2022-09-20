/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    if (nums.length === 0) return [[]]
    
    const firstEl = nums[0]
    const remaindingEles = nums.slice(1)
    const subsetsWithoutEle = subsets(remaindingEles)
    const subsetWithEle = subsetsWithoutEle.map((sub) => [firstEl, ...sub])
    return [...subsetsWithoutEle, ...subsetWithEle]
    
};
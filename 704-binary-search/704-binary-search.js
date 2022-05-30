/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, res = 0) {
    if (nums.length === 1 && nums[0] === target) {
        return res
    } 
    
    if (nums.length === 0) return -1
    
    let mid = Math.floor(nums.length / 2)
    
    
    if (nums[mid] === target) {
        return res + mid 
    } else if (nums[mid] < target) {
        res += mid + 1
        return search(nums.slice(mid+1), target, res)
    } else {
        return search(nums.slice(0,mid), target, res)
    }

    

    
};
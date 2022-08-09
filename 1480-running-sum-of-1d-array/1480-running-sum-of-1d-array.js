/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res = []
    let currSum = 0
    
    for (let num of nums) {
        currSum += num
        res.push(currSum)
    }
    
    return res
};
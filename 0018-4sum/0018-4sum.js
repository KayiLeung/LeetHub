/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let res = new Set()
    nums.sort((a , b) => a - b) // -2, -1, 0 , 0, 1, 2
    for (let first = 0; first < nums.length - 3; first++) {
        for(let second = first + 1; second < nums.length - 2; second++) {
            let third = second + 1
            let last = nums.length - 1
            while (third < last) {
                const sum = nums[first] + nums[second] + nums[third] + nums[last]
                if (sum === target) {
                    res.add(`${nums[first]},${nums[second]},${nums[third]},${nums[last]}`)
                    third++
                    last--
                } else if (sum < target) {
                    third++
                } else {
                    last--
                }
            }
        }
    }
    let ans = []
    for (const item of res) {
        ans.push(item.split(','))
    }
    return ans
};
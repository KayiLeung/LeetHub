/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = {}
    let main = null
    let max = -Infinity
    for (let n of nums) {
        if (!count.hasOwnProperty(n)) count[n] = 0
        count[n] += 1
        if (count[n] > max) {
            max = count[n]
            main = n
        }
    }
    return main
};
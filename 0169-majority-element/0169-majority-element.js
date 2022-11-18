/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let main = {}
    let res = null
    let max = 0
    for (let n of nums) {
        if (!(n in main)) main[n] = 0
        main[n] += 1
        if (main[n] > max) {
            max = main[n]
            res = n
        }
    }
    return res
};
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    const sorted = arr.sort((a, b) => a - b)
    let diff = sorted[1] - sorted[0]
    for (let i = 1; i < sorted.length - 1; i++) {
        if ((sorted[i + 1] - sorted[i]) !== diff) return false
    }
    return true
};
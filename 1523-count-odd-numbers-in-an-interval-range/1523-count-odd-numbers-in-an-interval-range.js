/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let count = 0
    if (low % 2 === 0) low += 1
    while (low <= high) {
        count++
        low += 2
    }
    return count
};
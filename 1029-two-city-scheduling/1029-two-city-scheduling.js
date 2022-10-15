/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    sorted = costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]))
    let total = 0
    let half = sorted.length / 2
    for (let i = 0 ; i < sorted.length; i++) {
        const [a, b] = sorted[i]
        if (i < half) {
            total += a
        } else {
            total += b
        }
    }
    return total
};
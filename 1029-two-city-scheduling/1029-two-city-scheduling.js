/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    
    let sorted = costs.sort((a,b) => (a[0] - a[1]) - (b[0] - b[1]))
    let total = 0
    let half = costs.length / 2
    
    for (let i = 0; i < costs.length ; i++) {
        let cost = sorted[i]
        if (i < half) {
            total += cost[0]
        } else {
            total += cost[1]
        }
    }
    return total
};
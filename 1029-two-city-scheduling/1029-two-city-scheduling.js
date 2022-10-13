/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let sorted = costs.sort((a , b) => (a[0] - a[1]) - (b[0] - b[1]) )
    let half = sorted.length / 2 
    let res = 0
    
    for (let i = 0; i < sorted.length; i++) {
        if (half > i) {
            res += sorted[i][0]
        } else {
            res += sorted[i][1]
        }
    }
    return res
};
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let len = cost.length;
    if(len<2) return cost[len];
    let f1 = cost[0];
    let f2 = cost[1];
    for(let i=2; i<len; i++){
        let temp = cost[i] + Math.min(f1, f2);
        f1 = f2;
        f2 = temp;
    }
    return Math.min(f1, f2);
};
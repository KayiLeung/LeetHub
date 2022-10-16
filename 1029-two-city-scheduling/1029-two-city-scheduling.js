/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
   // sort costs by city a and city b different from low to high
    
    costs.sort((a , b) => (a[0] - a[1]) - (b[0] - b[1])) //[-170, -10, 10, 350]
    const half = costs.length / 2 // 2
    let total = 0
    
    //the first half of cities are lower cost to fly to city a
    for (let i = 0 ; i < costs.length; i++) {
        if (i < half) total += costs[i][0]
        else total += costs[i][1]
    }
    
    //the other half of cities are lower cost to fly to city b
    // return first half  + other half
    return total
};
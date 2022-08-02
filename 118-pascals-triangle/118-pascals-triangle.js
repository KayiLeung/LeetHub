/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return []
    
    let res = [[1]]
    for (let i = 1; i < numRows; i++ ) {
        res[i] = [1]
        
        const lastR = res[i - 1]
        
        for (j = 1; j < lastR.length; j++) {
            const sum = lastR[j - 1] + lastR[j]
            res[i].push(sum)
        }
        res[i].push(1)
        
    }
    
    return res
};
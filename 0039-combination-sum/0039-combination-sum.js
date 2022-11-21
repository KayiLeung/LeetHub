/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    
    dfs = (currCandidate, current, subRes) => {
        if (current === 0) res.push(subRes)
        if (current <= 0) return 
        
        for (let i = 0; i < currCandidate.length; i++) {
            dfs(currCandidate.slice(i), current - currCandidate[i], [...subRes, currCandidate[i]])
        }
    } 
    
    dfs(candidates, target, [])
    
    return res
};
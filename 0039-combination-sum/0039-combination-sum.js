/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    dfs = (currCandidates, curr, subRes) => {
        if (curr === 0) res.push(subRes)
        if (curr <= 0) return
        
        for (let i = 0; i < currCandidates.length; i++) {
            dfs(currCandidates.slice(i), curr - currCandidates[i], [...subRes, currCandidates[i]])
        }
    }
    
    dfs(candidates, target, [])
    
    return res
};
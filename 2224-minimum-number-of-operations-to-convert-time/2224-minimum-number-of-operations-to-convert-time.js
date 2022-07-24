/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    let operations = [1, 5, 15, 60]
    a = current.split(":")
    b = correct.split(":")
    let diff = (parseInt((b[0])) * 60 + parseInt(b[1])) - (parseInt((a[0])) * 60 + parseInt(a[1]))
    
    let dp = new Array(diff + 1).fill(Infinity)      
    dp[0] = 0
    
    for(let i = 1; i <= diff; i++) {
        let count = Infinity
        for(let o of operations) {
            if(i - o < 0) continue
            dp[i] = Math.min(dp[i] , dp[i - o] + 1)
        }
    }
    return dp[diff]
};
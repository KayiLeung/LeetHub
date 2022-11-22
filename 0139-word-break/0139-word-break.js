/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const len = s.length
    const dp = Array(len + 1).fill(false)
    dp[len] = true
    
    for (let i = len - 1; i >= 0; i--) {
        for (const word of wordDict) {
            const wLen = word.length
            if (i +  wLen <= len && s.slice(i, i + wLen) === word) {
                dp[i] = dp[i + wLen]
                if (dp[i]) break
            }
        }
    }
    return dp[0]
};
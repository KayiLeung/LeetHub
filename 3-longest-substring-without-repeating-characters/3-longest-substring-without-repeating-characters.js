/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var start = 0, maxLen = 0
    let map = new Map();
    
    for (let i = 0; i < s.length; i ++) {
        var char = s[i]
        
        if(map.get(char) >= start) start = map.get(char) + 1;
        
        map.set(char, i)
        
        maxLen = Math.max(maxLen, (i - start + 1))
    }
    
    return maxLen
};
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const map1 = {}
    const map2 = {}
    
    let L = 0
    let R = 0
    
    for (const char of s1) {
        map1[char] = map1[char] + 1 || 1
    }
    
    while (R < s2.length) {
        
        const char = s2[R]
        
        map2[char] = map2[char] + 1 || 1
        
        while (map2[char] > (map1[char] || 0)) {
            map2[s2[L]]--       
            L++
        }
        if (R - L + 1 === s1.length) return true;
        R++
    }
    return false
    
}
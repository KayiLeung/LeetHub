/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left = 0;
    let freq = new Map();
    
    for (let i = 0; i < t.length; i ++) {
        let char = t[i];
        freq[char] = (freq[char] || 0) + 1;
    }
    
    let minLength = s.length + 1;
    let matched = 0;
    let subStart = 0;
    
    for (let right = 0; right < s.length; right ++) {
        let rightChar = s[right];
        
        if (rightChar in freq) {
            freq[rightChar]--;
            if (freq[rightChar] >= 0) {
                matched++;
            }
        }
        
        while (matched === t.length) {
            if (minLength > right - left + 1) {
                minLength = right - left + 1;
                subStart = left;
            }
            
            let leftChar = s[left];
            left++
            if (leftChar in freq) {
                if (freq[leftChar] === 0) {
                    matched--;
                }
                freq[leftChar]++
            }
        }
    }
    
    if (minLength > s.length) {
        return "";
    }
    
    return s.substring(subStart, subStart + minLength)
};
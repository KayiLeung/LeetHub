/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let nLen = needle.length
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            const str = haystack.slice(i, i + nLen)
            if (str === needle) return i
        }
    }
    return -1
};
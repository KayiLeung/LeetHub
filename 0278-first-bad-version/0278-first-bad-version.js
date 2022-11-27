/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1
        while (left < n) {
            const mid = ~~((left + n) / 2)
            if (isBadVersion(mid)) {
                if (!isBadVersion(mid - 1)){
                    return mid
                } else {
                    n = mid
                }
            } else {
                if (isBadVersion(mid + 1)) {
                    return mid + 1
                } else {
                    left = mid
                }
            }
        }
       return n 
    };
    
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = []
    let i = 0
    let j = 0
    let n = nums1.length + nums2.length
    let med = Math.floor(n / 2)
    
    while (merged.length <= med) {
        val1 = nums1[i] === undefined ? Infinity : nums1[i]
        val2 = nums2[j] === undefined ? Infinity : nums2[j]
        if (val1 > val2) {
            merged.push(val2)
            j++
        } else {
            merged.push(val1)
            i++
        }
    }
    
    if (n % 2 === 0) {
        sum = merged.slice(-2).reduce((a , b) => a + b)
        return sum / 2 
    } else {
        return merged.slice(-1)
    }
    
}
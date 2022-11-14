/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let wide = height.length - 1
    let i = 0
    let j = wide
    let max = 0
    
    while (i <= j) {
        const left = height[i]
        const right = height[j]
        let curr = Math.min(left, right) * wide
        max = Math.max(curr, max)
        
        if (left >= right) {
            j--
        } else {
            i++
        }
        wide--
    }
    return max
};
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let h = {}
    let w = height.length - 1
    let max = 0
    // for (let i = 0; i < w; i++) {
    //     h[i + 1] = height[i]
    // }
    
    let i = 0
    let j = w
    
    while (i < j ) {
        const curr = Math.min(height[i], height[j]) * w
        max = Math.max(max, curr)
        if (height[i] >= height[j]) {
            j--
        } else {
            i++
        }
        w--
    }
        
    
    return max
};
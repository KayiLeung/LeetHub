/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    /*
    when start wall has not find wall which is higher or equal to start wall, continue
    when end wall found, find the max container high by using Math.abs start - end
    then literity thu bar til end wall
    rain = max heigh - bar 
    */
    let ans = 0
    let leftMax = 0
    let rightMax = 0
    let i = 0
    let j = height.length - 1
    
    while ( i <= j ) {
        if (height[i] <= height[j]) {
            const left = height[i]
            if (left > leftMax) {
                leftMax = left
            } else {
                ans += leftMax - left
            } 
            i++
        } else {
            const right = height[j]
            if (right > rightMax) {
                rightMax = right
            } else {
                ans += rightMax - right
            }
            j--
        }
    }
    return ans
};
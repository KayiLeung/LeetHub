/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let i = 0
    let j = numbers.length - 1
    while(i < j) {
        const first = numbers[i]
        const second = numbers[j]
        const sum = first + second
        if (sum === target) {
            return [i + 1, j + 1]
        } else if (sum > target) {
            j--
        } else {
            i++    
        }
    }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/* goal return pair of indices of elements which there sum is equal to target
   literate the whole array and create a hashmap to record the prev number as key and index as value
   use curr to minus target and get the different, if we can find the different in the hashmap, mean there is a pair and push those indices to res
   
*/
var twoSum = function(nums, target) {
    let prev = {}
    for (let i = 0 ; i < nums.length; i++) {
        const diff = target - nums[i]
        if (diff in prev) return [prev[diff], i]
        prev[nums[i]] = i
    }
};
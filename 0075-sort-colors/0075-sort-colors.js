/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
three pointer, set left, high and curr as moving pointers
if curr = 0 swap with left, and left move one step to right
if curr = 2 swap with right, and right move one step to left
if curr = 1 continue
while curr > right return 
*/
var sortColors = function(nums) {
    let left = 0
    let right = nums.length - 1
    let curr = left
    
    while (curr <= right) {
        switch(nums[curr]){
            case 0:
                [nums[left], nums[curr]] = [nums[curr], nums[left]]
                left++
                curr++
                break;
            case 1:
                curr++
                break;
            case 2:
                [nums[curr], nums[right]] = [nums[right], nums[curr]]
                right--
                break;
        }
    }
    return nums
};
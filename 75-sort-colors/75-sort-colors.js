/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let low = 0
  let high = nums.length - 1
  let i = low
  
  while (i <=high) {
      switch(nums[i]) {
          case 0:
              [nums[low], nums[i]] = [nums[i], nums[low]]
              low++
              i++
              break;
          case 1:
              i++
              break;
          case 2:
              [nums[i], nums[high]] = [nums[high], nums[i]]
              high--
             break;
      }
  }
};
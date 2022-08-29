class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        prevs = {}
        
        for i in range(len(nums)):
            num = nums[i]
            diff = target - num
            if num in prevs.keys():
                return [i, prevs[num]]
            prevs[diff] = i
        
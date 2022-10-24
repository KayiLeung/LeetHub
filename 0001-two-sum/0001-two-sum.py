class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        prevs = {}
        
        for i in range (len(nums)):
            diff =  target - nums[i]
            if diff in prevs:
                return [i , prevs[diff]]
            
            prevs[nums[i]] = i
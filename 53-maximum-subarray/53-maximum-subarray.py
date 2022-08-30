class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max_sum = float('-inf')
        
        sum = 0
        
        for num in nums:
            sum += num
            if max_sum <= sum:
                max_sum = sum
            if sum < 0:
                sum = 0
        
        return max_sum
                
        
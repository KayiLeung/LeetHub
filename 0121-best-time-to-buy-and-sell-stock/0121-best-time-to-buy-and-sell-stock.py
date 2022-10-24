class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        min = prices[0]
        res = 0
        for i in range(len(prices)):
            num = prices[i]
            if min > num:
                min = num
            curr = num - min
            if res < curr:
                res = curr
                
        return res
class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        best = 0
        curr_min = prices[0]
        
        for p in prices:
            if p < curr_min:
                 curr_min = p
            curr = p - curr_min
            if best < curr:
                best = curr
                
        return best
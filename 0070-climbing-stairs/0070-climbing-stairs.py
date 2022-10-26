class Solution:
    def climbStairs(self, n: int) -> int:
        cache = {1:1, 2:2,}
        
        def climb(n):
            if n in cache:
                return cache[n]
            cache[n] = climb(n - 1) + climb(n - 2)
            
            return cache[n]
        
        print(cache)
        return climb(n)
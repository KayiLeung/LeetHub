class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        res = 0
        
        mp = {}
        i = 0
        
        for j in range(n):
            char = s[j]
            if char in mp:
                i = max(mp[char], i)
            
            res = max(res, j - i + 1)
            mp[char] = j + 1
        
        return res
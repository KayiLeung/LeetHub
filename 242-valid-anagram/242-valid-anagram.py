class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        
        if len(s) != len(t):
            return False
        dict = {}
        
        for i in range(len(s)):
            if s[i] not in dict.keys():
                dict[s[i]] = 0
            dict[s[i]] += 1
            if t[i] not in dict.keys():
                dict[t[i]] = 0
            dict[t[i]] -= 1
            
        return all(value == 0 for value in dict.values())
class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """

        if (len(s) != len(t)):
            return False
    
        dict = {}
        
        for i in range(len(s)):
            if s[i] not in dict:
                dict[s[i]] = 0
            dict[s[i]] += 1
            if t[i] not in dict:
                dict[t[i]] = 0
            dict[t[i]] -= 1
        
        for char in s:
            if dict[char] != 0:
                return False
        
        return True
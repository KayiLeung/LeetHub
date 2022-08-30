class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if len(s) % 2 != 0:
            return False
        dic = {
            '(' : ')',
            '[' : ']',
            '{' : '}'
        }
        stack = []
        
        for i , char in enumerate(s):
            if s[i] in dic:
                stack.append(char)
            else:
                if len(stack) != 0 and dic[stack[-1]] == char:
                    stack.pop()
                else:
                    return False
                
        return len(stack) == 0
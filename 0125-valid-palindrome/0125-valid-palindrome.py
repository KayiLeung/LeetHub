class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        delchars = ""
        filtered_chars = filter(lambda char: char.isalnum(), s)
        i = 0
        j = len(filtered_chars) - 1
        while i < j:
            if filtered_chars[i].lower() != filtered_chars[j].lower():
                return False
            i += 1
            j -= 1
        
        return True
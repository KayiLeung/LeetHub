class Solution:
    def longestPalindrome(self, s: str) -> int:
        s_counter = Counter(s)
        res = 0
        for char in s_counter:
            res += s_counter[char] // 2 * 2
            if res % 2 == 0 and s_counter[char] % 2 == 1:
                res += 1
        return res
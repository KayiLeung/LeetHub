class Solution:
    def addBinary(self, a: str, b: str) -> str:
        list_a = list(a)
        list_b = list(b)
        res = ''
        carry = 0
        
        while list_a or list_b:
            if not list_a:
                num_a = 0
            else:
                num_a = int(list_a.pop())
            if not list_b:
                num_b = 0
            else:
                num_b = int(list_b.pop())
            sum = num_a + num_b + carry
            
            
            res = str(sum % 2) + res
            carry = sum // 2
        
        if carry == 1:
            res = str(carry) + res
        
        return res
            
            
            
        
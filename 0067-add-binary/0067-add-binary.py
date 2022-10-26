class Solution:
    def addBinary(self, a, b) -> str:
        n = max(len(a), len(b))
        a, b = a.zfill(n), b.zfill(n)
        
        carry = 0
        answer = ''
        for i in range(n - 1, -1, -1):
            if a[i] == '1':
                carry += 1
            if b[i] == '1':
                carry += 1
            
            if carry % 2 == 0:
                answer = '0' + answer
            else:
                answer = '1' + answer
            
            carry = carry // 2
        
        if carry == 1:
            answer = '1' + answer
        return answer
            
            
        
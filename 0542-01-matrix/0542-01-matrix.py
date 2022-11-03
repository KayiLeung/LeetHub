class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        m = len(mat)
        n = len(mat[0])
        distance = [["."] * n for i in range(m)]
        visited = set()
        q = deque([])
        dirs = [[1,0], [0,1],[-1,0],[0,-1]]
        
        for i in range(m):
            for j in range(n):
                if mat[i][j] == 0:
                    q.append(((i, j), 0))
                    distance[i][j] = 0
                    visited.add((i, j))
        while q:
            (r, c), dis = q.popleft()
            
            for dr, dc in dirs:
                row = r + dr
                col = c + dc
                
                if row not in range(m) or col not in range(n) or (row, col) in visited or mat[row][col] == 0:
                    continue
                visited.add((row, col))
                distance[row][col] = dis + 1
                q.append(((row, col), dis + 1))
        return distance
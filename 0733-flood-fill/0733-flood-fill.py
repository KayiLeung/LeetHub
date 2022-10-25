def ffill(old_color, new_color, i, j, image, m, n):
    
    if i < m and i >= 0 and j < n and j >= 0 and image[i][j] == old_color:

        image[i][j] = new_color
        ffill(old_color, new_color, i, j+1, image, m, n)
        ffill(old_color, new_color, i+1, j, image, m, n)
        ffill(old_color, new_color, i-1, j, image, m, n)
        ffill(old_color, new_color, i, j-1, image, m, n)

    return image

class Solution:
    def floodFill(self, image, sr, sc, color):
        
        if image[sr][sc] == color:
            return image
        m , n = len(image), len(image[0])
        return ffill(image[sr][sc], color, sr, sc, image, m, n)

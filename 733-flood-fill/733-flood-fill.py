def ffill(old_color, new_color, i, j, image):

    if i < len(image) and i >= 0 and j < len(image[0]) and j >= 0 and image[i][j] == old_color:

        image[i][j] = new_color
        ffill(old_color, new_color, i, j+1, image)
        ffill(old_color, new_color, i+1, j, image)
        ffill(old_color, new_color, i-1, j, image)
        ffill(old_color, new_color, i, j-1, image)

    return image

class Solution:
    def floodFill(self, image, sr, sc, color):
        if image[sr][sc] == color:
            return image
        
        return ffill(image[sr][sc], color, sr, sc, image)


            
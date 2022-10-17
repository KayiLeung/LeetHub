/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    //
    //looks for row => 3 or more candies besided in row, and reassign those values as -values
    //looks for col => 3 or more candies besided in col
    //if value === 0, pass it
    //drop positive value to the bottom boundary
    //look for second round, recursively 
    //return board until there are more same adjacent values
    
    let isDone = true
    const col = board[0].length
    const row = board.length
    
    //check rows
    
    for (let r = 0 ; r < row; r++) {
        for(let c = 0; c < col - 2; c++) {
            const num1 = Math.abs(board[r][c])
            const num2 = Math.abs(board[r][c + 1])
            const num3 = Math.abs(board[r][c + 2])
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                board[r][c] = -num1
                board[r][c + 1] = -num2
                board[r][c + 2] = -num3
                isDone = false    //since there are matching candies, so the board is not done
            }
        }
    }
    //check cols
    for(let c = 0 ; c < col; c++) {
        for(let r= 0; r < row - 2; r++) {
            const num1 = Math.abs(board[r][c])
            const num2 = Math.abs(board[r + 1][c])
            const num3 = Math.abs(board[r + 2][c])
            if (num1 === num2 && num2 === num3 && num1 !== 0) {
                board[r][c] = -num1
                board[r + 1][c] = -num2
                board[r + 2][c] = -num3
                isDone = false    //since there are matching candies, so the board is not done
            }
        }
    }

    if (!isDone) {     
        for(let c = 0 ; c < col; c++) {
            let endIndex = row - 1
            for(let r = row - 1; r >=0; r--) {
                if (board[r][c] > 0) {
                    board[endIndex][c] = board[r][c]
                    endIndex--
                }
            }
            for (let r = endIndex; r >= 0; r--) {
                board[r][c] = 0
            }
        }
    }
    if (isDone) return board
    else return candyCrush(board);
};
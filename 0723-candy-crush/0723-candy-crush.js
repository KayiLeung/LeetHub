/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    //check rows, if more than 3 or more candies => reassign value to negative vale
    //check col, same as rows
    //set pointer for each row, if that value is larger than zero, which move pointer--
    //if value is lower than zero, ressign current to pointer row
    if (!board) return board
    let isDone = true
    const col = board[0].length
    const row = board.length
    //for col
    for (let c = 0; c < col; c++) {
        for(let r = 0; r < row - 2; r++) {
            const num1 = Math.abs(board[r][c])
            const num2 = Math.abs(board[r + 1][c])
            const num3 = Math.abs(board[r + 2][c])
            if (num1 === num2 && num1 === num3 && num1 !== 0) {
                board[r][c] = -num1
                board[r + 1][c] = -num2
                board[r + 2][c] = -num3
                isDone = false
            }
        }
    }
    
    //for rows
    
    for (let r = 0; r < row; r++) {
        for(let c = 0; c < col - 2; c++) {
            const num1 = Math.abs(board[r][c])
            const num2 = Math.abs(board[r][c + 1])
            const num3 = Math.abs(board[r][c + 2])
            if (num1 === num2 && num1 === num3 && num1 !== 0) {
                board[r][c] = -num1
                board[r][c + 1] = -num2
                board[r][c + 2] = -num3
                isDone = false
            }
        }
    }
    
    if (!isDone) {
        for (let c = 0; c < col; c++) {
            let pointer = row - 1
            for(let r = row - 1; r >= 0; r--) {
                if (board[r][c] > 0) {
                    board[pointer][c] = board[r][c]
                    pointer--
                }
            }
            for (let r = pointer; r >= 0; r--) {
                board[r][c] = 0
            }
        }
    }
    if (isDone) return board
    else return candyCrush(board);
};
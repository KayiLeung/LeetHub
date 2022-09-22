/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    for (let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if (explore(board,i, j, word, 0) === true) return true
        }
    }
    
    return false
};
    
const explore = (board, row, col, word, i) => {
    if (i === word.length) return true
    
    const rowInbound = 0 <=  row && row < board.length
    const colInbound = 0 <=  col && col < board[0].length
    if (!rowInbound || !colInbound) return false
    const char = board[row][col]    
    if (char !== word[i]) return false
    board[row][col] = '*'
    const result = explore(board, row - 1, col, word, i + 1) ||
        explore(board, row + 1, col, word, i + 1) ||
        explore(board, row, col - 1, word, i + 1) ||
        explore(board, row, col + 1, word, i + 1)
    
    board[row][col] = char
    return result
}


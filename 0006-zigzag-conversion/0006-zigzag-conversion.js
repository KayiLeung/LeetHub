/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s.length <= numRows || numRows === 1) return s
    let zigzag = new Array(numRows).fill('')
    let count = 0
    let down = true
    
    for (let char of s) {
        zigzag[count] += char
        down ? count++ : count--
        if (count === numRows - 1 || !count) {
            down = !down
        }
    }
    return zigzag.join('')
};
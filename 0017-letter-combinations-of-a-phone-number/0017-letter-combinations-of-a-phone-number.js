/**
 * @param {string} digits
 * @return {string[]}
 */

    
const letters = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}

var letterCombinations = function(digits) {
    if (digits.length === 1) return letters[digits[0]].split('')
    if (digits.length === 0) return []
    let res = []
    let rest = letterCombinations(digits.slice(1))
    
    for (let r of rest) {
        for (let char of letters[digits[0]]) {
            res.push(char + r)
        }
    }
    return res
};
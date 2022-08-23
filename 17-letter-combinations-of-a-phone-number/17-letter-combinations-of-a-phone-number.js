/**
 * @param {string} digits
 * @return {string[]}
 */
    // const letters = {
    //     2 : ['a', 'b', 'c'],
    //     3 : ['d', 'e', 'f'],
    //     4 : ['g', 'h', 'i'],
    //     5 : ['j', 'k', 'l'],
    //     6 : ['m', 'n', 'o'],
    //     7 : ['p', 'q', 'r', 's'],
    //     8 : ['t', 'u', 'v'],
    //     9 : ['w', 'x', 'y', 'z'] 
    // }
    
    const letters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}

var letterCombinations = function(digits) {
    
    if (!digits.length) return []
    let res = []
    const digit = digits[0]
    let sub = letterCombinations(digits.slice(1))

    
    for(let l of letters[digit]) {
        for (let ch of sub) {
            res.push(l + ch)
        }
    }

    if (res.length === 0) res = [...letters[digit]]
    return res
};
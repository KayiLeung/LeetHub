/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ')
    for (let i = 0; i < words.length; i++) {
        let reversed = words[i].split('').reverse().join('')
        words.splice(i,1, reversed)
        
    }
    return words.join(' ')
};
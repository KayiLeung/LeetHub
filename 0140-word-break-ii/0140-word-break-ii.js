/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const arr = [];
    const go = (str, val) => {
        if (str === '') {
            arr.push(val.trim());
            return;
        }
        for (let word of wordDict) {
            if (str.startsWith(word)) {
                go(str.replace(word, ''), val + word + ' ');
            }
        }
    }
    go(s, '');
    return arr;
};
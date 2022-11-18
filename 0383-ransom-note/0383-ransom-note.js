/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false
    
    let notes = {}
    for (let n of magazine) {
        if (!(n in notes)) notes[n] = 0
        notes[n] += 1
    }
    
    for (let n of ransomNote) {
        if (!(n in notes)) return false
        notes[n] -= 1
        if (notes[n] < 0) return false
    }
    return true
};
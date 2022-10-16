/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    //hashtable stores as array => [char, count]
    let hash = []
    
    for (let char of s) {
        if (!hash.length) {
            hash.push([char, 1])
        } else {
            if (hash[hash.length - 1][0] === char) {
                hash[hash.length - 1][1] += 1
                if (hash[hash.length - 1][1] === k) hash.pop()
            } else {
                hash.push([char, 1])
            }
        }
    }
    let res = ''
    for (let [char, count] of hash) {
        res += repeat(char, count)
    }
    return res
    //if curr char is not same as last hash ele, push [curr char, count]
    //if curr char same as last hash ele, last hash [curr char, count + 1]
    //if curr char count === k , pop this out from hashtable
    //return hashtable and use method join('') when iterate thur s
    //time complexity O(n) n = s.length, space complexity worest case:O(n)
};

const repeat = (char, count) => {
    let res = ''
    for (let i = 0 ; i < count; i++) {
        res += char
    }
    return res
}
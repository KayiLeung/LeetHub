/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList, i = 0, memo = {}) {
    const wordSet = new Set(wordList)
    if (!wordSet.has(endWord)) return 0
    
    const queue = []
    const n = wordList.length
    const visited = new Array(n).fill(false)
    let ladder = 1
    
    queue.push(beginWord)
    
    while (queue.length) {
        let size = queue.length
        
        while (size) {
            const front = queue.shift()
            if (front === endWord) return ladder
            
            for (let i = 0 ; i < n ; i++) {
                if(!visited[i] && isOneDiffernt(front, wordList[i])) {
                    visited[i] = true
                    queue.push(wordList[i])
                }
            }
            size -= 1
        }
        if (!queue.length) ladder = 0
        else ladder += 1
    }
    return ladder
};

const isOneDiffernt = (a , b) => {
    let diff = 0
    for(let i = 0 ; i < a.length; i++) {
        if(a[i] !== b[i]) {
            diff++
            if (diff > 1) return false
        }
    }
    return diff === 1
}
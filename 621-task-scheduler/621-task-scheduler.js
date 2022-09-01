/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    
    const hashMap = {}
    let maxKey
    let max = 0
    
    for (const task of tasks) {
        hashMap[task] = hashMap[task] ? hashMap[task] + 1 : hashMap[task] = 1
        if (hashMap[task] > max) {
            max = hashMap[task]
            maxKey = task
        }
    }
    
    let i = max * (n + 1) - n - max;
    for (let [key, val] of Object.entries(hashMap)) {
        if (maxKey === key) continue;
        
        if (val === max) {
            i = i - val + 1
        } else {
            i -= val;
        }
    }

    return tasks.length + (i > 0 ? i : 0)
};
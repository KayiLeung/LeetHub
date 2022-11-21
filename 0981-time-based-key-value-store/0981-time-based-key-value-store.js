
var TimeMap = function() {
    this.keyTimeMap = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp, map = this.keyTimeMap) {
    if (map.get(key) === undefined) map.set(key, [])
    map.get(key).push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp, map = this.keyTimeMap) {
    if (map.get(key) === undefined) return ''
    const arr = map.get(key)
    let min = 0, max = arr.length - 1
    let res = ''
    
    while (min <= max) {
        const mid = ~~((min + max) /2)
        const [value, time] = arr[mid]
        
        if (timestamp === time) return value
        if (timestamp >= time) {
            min = mid + 1
            res = value
        } else {
            max = mid - 1
        }
    }
    return res
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

var TimeMap = function() {
    this.hashmap = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.hashmap.hasOwnProperty(key)) this.hashmap[key] = []
    this.hashmap[key].push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const arr = this.hashmap[key] || []
    let min = 0
    let max = arr.length - 1
    let res = ""
    while (min <= max) {
        const mid = ~~((min + max) / 2)
        const [val, time] = arr[mid]
        if (time === timestamp) {
            return val
        } else if (time > timestamp) {
            max = mid - 1
        } else {
            min = mid + 1
            res = val
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
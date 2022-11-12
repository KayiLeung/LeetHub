
class TimeMap {
    constructor() {
        this.timeMap = {}
        
    }

    set = (key, val, timestamp, map = this.timeMap) => {
        if (map[key] === undefined) map[key] = []
        map[key].push([val, timestamp])
    }
    
    get = (key, timestamp, map = this.timeMap) => {
        const arr = map[key] || []
        let min = 0
        let max = arr.length - 1
        let res = ''
        
        while (min <= max) {
            const mid = Math.floor((min + max) /2)
            let [val, time] = arr[mid]
            
            if (timestamp === time) return val
            if (timestamp >= time) {
                min = mid + 1
                res = val
            } else {
                max = mid - 1
            }
        }
        return res
    }
    
}

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */


/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */


/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
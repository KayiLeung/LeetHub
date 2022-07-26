
class TimeMap {
    constructor() {
        this.timeMap = new Map()
        
    }

    set = (key, val, timestamp, map = this.timeMap) => {
        if (!map.has(key)) map.set(key, [])
        map.get(key).push([val, timestamp])
    }
    
    get = (key, timestamp, map = this.timeMap) => {
        const arr = map.get(key) || []
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
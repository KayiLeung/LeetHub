
var MyHashMap = function() {
    this.hashmap = []
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    for (let set of this.hashmap) {
        if (set[0] === key) {
            set[1] = value
            return this.hashmap
        }
    }
    this.hashmap.push([key, value])
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    for (let set of this.hashmap) {
        if (set[0] === key) return set[1]
    }
    return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let prev = []
    for (let set of this.hashmap) {
        if (set[0] !== key) prev.push(set)
    }
    return this.hashmap = prev
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
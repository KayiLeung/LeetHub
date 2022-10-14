
var RandomizedSet = function() {
    this.map = new Map() // hashmap -> this.set[2] = true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    const existed = this.map.has(val)
    this.map.set(val, true)
    return !existed
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    const existed = this.map.has(val)
    this.map.delete(val)
    return existed
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const random = Math.floor(Math.random() * this.map.size)
    const keys = Array.from(this.map.keys())
    return keys[random]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
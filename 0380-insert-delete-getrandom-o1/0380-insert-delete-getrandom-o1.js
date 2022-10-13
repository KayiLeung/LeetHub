
var RandomizedSet = function() {
    this.map = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    const exsisted = this.map.has(val)
    this.map.set(val, true)
    return !exsisted
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    const exsisted = this.map.has(val)
    this.map.delete(val)
    return exsisted
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const a = Array.from(this.map.keys())
    const r = Math.floor(Math.random() * a.length)
    return a[r]
    
    
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
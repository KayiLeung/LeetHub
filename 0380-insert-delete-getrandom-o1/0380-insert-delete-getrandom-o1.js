
var RandomizedSet = function() {
    this.set = new Set()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    const exsisted = this.set.has(val)
    this.set.add(val)
    return !exsisted
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    const exsisted = this.set.has(val)
    
    this.set.delete(val)
    return exsisted
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const items = Array.from(this.set)
    const random = Math.floor(Math.random() * items.length)
    return items[random]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
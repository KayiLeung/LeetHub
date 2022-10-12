
var MyHashSet = function() {
    this.hash = []
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    for (let ele of this.hash) {
        if (ele === key) {
            return this.hash
        }
    }
    return this.hash.push(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if (this.contains) {
        let prev = []
        for (let ele of this.hash) {
            if (ele !== key) {
                prev.push(ele)
            }
        }
        return this.hash = prev
    } else {
        return this.hash
    }
    
    
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    for (let ele of this.hash) {
        if (ele === key) {
           return true
        }
    }
    return false
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
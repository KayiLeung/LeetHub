/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.order = new Array(n).fill(null)
    this.pointer = 0
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.order[idKey - 1] = value
    result = []
    while(this.order[this.pointer])  {
        result.push(this.order[this.pointer])
        this.pointer++
    }
    return result
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
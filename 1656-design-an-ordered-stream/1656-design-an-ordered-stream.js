/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.stream = new Array(n).fill(null) // [null, null, null, null, null]
    this.pointer = 0 //pointer indicate ordered items
    this.size = n
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey - 1] = value
    let ordered = []
    const start = this.pointer
    while (this.stream[this.pointer]) {
        this.pointer++
    }
    return this.stream.slice(start, this.pointer)
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
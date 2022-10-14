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
    for (let i = this.pointer ; i < this.size; i++) {
        if (!this.stream[i]) return ordered
        ordered.push(this.stream[i])
        this.pointer++
    }
    return ordered
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
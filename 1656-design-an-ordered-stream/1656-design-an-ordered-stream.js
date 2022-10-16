/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.array = new Array(n).fill(null) // [null, null, null, null, null]
    this.pointer = 0
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.array[idKey - 1] = value
    let outputted = []
    while (this.array[this.pointer]) {
        outputted.push(this.array[this.pointer])
        this.pointer++
    }
    return outputted
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
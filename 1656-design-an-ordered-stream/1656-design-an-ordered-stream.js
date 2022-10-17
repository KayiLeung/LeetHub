/**
 * @param {number} n
 */

//create an new array with n size and fill all values as null
//assign an variable, pointer, to indicate ordered index
//everytime when insert new values, check is there any ordered eles, if so, return ordered eles
//else return emtpy array
var OrderedStream = function(n) {
    this.stream = new Array(n).fill(null)
    this.pointer = 0
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey - 1] = value
    let res = []
    while(this.stream[this.pointer]) {
        res.push(this.stream[this.pointer])
        this.pointer++
    }
    return res
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
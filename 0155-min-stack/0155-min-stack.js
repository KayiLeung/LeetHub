
var MinStack = function() {
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack1.push(val)
    if (this.stack2.length === 0 || this.stack2.at(-1) >= val) {
        this.stack2.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popped = this.stack1.pop()
    if (this.stack2.at(-1) === popped) this.stack2.pop()
    return popped
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack1.at(-1)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.stack2.length) {
        return this.stack2.at(-1)
    } else {
        return this.stack1.at(-1)
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
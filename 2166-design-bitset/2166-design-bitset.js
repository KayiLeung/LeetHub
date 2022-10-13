var Bitset = function(size) {
    this.original = new Array(size).fill("0");
    this.inverted = new Array(size).fill("1");
	this.size = size;
	
    this.hash = {};
    this.hash["0"] = size;
    this.hash["1"] = 0;
};


Bitset.prototype.fix = function(idx) {
    if(this.original[idx] !== "1"){
        
        this.original[idx] = "1";
        this.inverted[idx] = "0"
        
        this.hash["1"] = this.hash["1"]+1;
        this.hash["0"] = this.hash["0"]-1;
    }
};


Bitset.prototype.unfix = function(idx) {
    if(this.original[idx] !== "0"){
        
        this.original[idx] = "0";
        this.inverted[idx] = "1";
        
		this.hash["1"] = this.hash["1"]-1;
        this.hash["0"] = this.hash["0"]+1;
    }
};


Bitset.prototype.flip = function() {
    let t = this.original;
    this.original = this.inverted;
    this.inverted = t;
    
    let temp = this.hash["1"];
    this.hash["1"] = this.hash["0"];
    this.hash["0"] = temp;
};


Bitset.prototype.all = function() {
    if(this.hash["1"] == this.size) return true;
    return false;
};


Bitset.prototype.one = function() {
    if(this.hash["1"] >= 1) return true;
    return false;
};


Bitset.prototype.count = function() {
    return this.hash["1"];
};


Bitset.prototype.toString = function() {
    return this.original.join("");
};

/** 
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */
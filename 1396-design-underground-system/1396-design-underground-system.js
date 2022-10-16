var UndergroundSystem = function() {
    this.system = {}
    this.trip = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.system[id] = [stationName, t]
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {

    if (id in this.system) {
        const key = this.system[id][0] + ',' + stationName
        if (!(key in this.trip))  this.trip[key] = [0,0]
        this.trip[key][0] += t - this.system[id][1] 
        this.trip[key][1]++
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const key = startStation + ',' + endStation
    const total = this.trip[key][0]
    const len = this.trip[key][1]
    return total / len
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
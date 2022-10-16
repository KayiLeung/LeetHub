
var UndergroundSystem = function() {
    this.checkInCustomer = {} // this.checkInCustomer[key] = [station, time]
    this.trips = {} // this.trips[start][end] = [total, count]
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkInCustomer[id] = [stationName, t] //(O(1))
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [startStation, startTime] = this.checkInCustomer[id] // O(1)
    const key = startStation + ',' + stationName
    if (!(key in this.trips)) this.trips[key] = [0, 0]
    this.trips[key][0] += (t - startTime)
    this.trips[key][1] += 1
     delete this.checkInCustomer[id]
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const key = startStation + ',' + endStation
    const [total, count] = this.trips[key]
    return total / count
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
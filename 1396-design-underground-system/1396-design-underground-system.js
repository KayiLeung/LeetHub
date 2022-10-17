//use two hash table, one for checkIn, one for storing start and end station, and time for a trip
//if customer checkin, use id as key and store it stationname and starting time
//before checkout, fetch customers data by he/she's id
//look for key in trips, if not, create a new key for this trip and storage total time of trip and count of trip
//customer checkout, delete customer in hash table by userid
//getAverageTime by look for start and end stations asa key, return total/count
var UndergroundSystem = function() {
    this.checkInCustomer = {}  // this.checkInCustomer[id] = [stationName, t]
    this.trips = {}  //this.trips[startStation+endStation] = [totalTime, count]
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkInCustomer[id] = [stationName, t]
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [startStation, startingTime] = this.checkInCustomer[id]
    const key = startStation + ',' + stationName
    if (!(key in this.trips)) this.trips[key] = [0 , 0]
    this.trips[key][0] += (t - startingTime)
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
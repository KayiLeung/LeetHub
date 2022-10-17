/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    // this.parking = {}
    // this.parking[1] = big
    // this.parking[2] = medium
    // this.parking[3] = small
    this.parking = {1 : big, 2: medium, 3: small}
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    const valid = this.parking[carType]
    if (valid) {
        this.parking[carType]--
    }
    return valid
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
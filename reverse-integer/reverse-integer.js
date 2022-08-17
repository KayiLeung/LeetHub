/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const r = parseInt(x.toString().split('').reverse().join(''))* Math.sign(x);
    return (r > -Math.pow(2, 31) && r < Math.pow(2, 31) - 1) ? r : 0
};


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let arr = []
    let carry = 0

    let arrA = a.split('')
    let arrB = b.split('')
    
    while (arrA.length > 0 || arrB.length > 0) {
        let num1 = arrA.length ? parseInt(arrA.pop()) : 0
        let num2 = arrB.length ? parseInt(arrB.pop()) : 0
        let sum = num1 + num2 + carry
        
        
        if (sum >= 2) {
            carry = 1
            sum % 2 === 0 ? arr.push('0') : arr.push('1')
        } else {
            carry = 0
            sum % 2 === 1 ? arr.push('1') : arr.push('0')
        }
    }
    
    if (carry === 1) {
        arr.push('1')
    }
    
    const res = arr.reverse()
    return res.join('')
};
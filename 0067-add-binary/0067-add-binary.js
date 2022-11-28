/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const arr1 = a.split('')
    const arr2 = b.split('')
    const res = []
    let carry = 0
    
    while (arr1.length > 0 || arr2.length > 0) {
        const ele1 = arr1.length ?  parseInt(arr1.pop()) : 0
        const ele2 = arr2.length ?  parseInt(arr2.pop()) : 0
        
        const sum = ele1 + ele2 + carry
        if (sum > 1)  {
            carry = 1
        } else {
            carry = 0
        }
        res.push(sum % 2)
    }
    if (carry > 0) res.push(carry)
    
    return res.reverse().join('')
};
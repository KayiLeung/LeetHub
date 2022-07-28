/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a, b) => a - b)
    salary = salary.slice(1, salary.length - 1)
    let sum = 0
    for (let s of salary) {
        sum += s
    }
    return sum/salary.length
};
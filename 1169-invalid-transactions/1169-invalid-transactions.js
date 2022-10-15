/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    let nameList = [], timeList = [], amountList = [], cityList = []
    let invalid = new Map()
    let res = []
    let len = transactions.length
    
    for (let i = 0 ; i < len; i++) {
        invalid.set(i, false)
    }
    
    for (let tran of transactions) {
        const [name, time, amount, city] = tran.split(',')
        nameList.push(name)
        timeList.push(Number(time))
        amountList.push(Number(amount))
        cityList.push(city)
    }
    
    for (let i = 0; i < len; i++) {
        if (amountList[i] > 1000) {
            invalid.set(i, true)
        }
        for (let j = i + 1; j < len; j++) {
            if (nameList[i] === nameList[j] && Math.abs(timeList[i] - timeList[j]) <= 60 && cityList[i] !== cityList[j]) {
                invalid.set(i, true)
                invalid.set(j, true)
            }
        }
    }
    
    for (let i = 0 ; i < len; i++) {
        if (invalid.get(i)) res.push(transactions[i])
    }
    return res
};
/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    const nameList = [], timeList = [], amountList = [], cityList = []
    let invalid = new Map() // [i , false]
    for (let i = 0; i < transactions.length; i++) {
        const [name, time, amount, city] = transactions[i].split(',')
        nameList.push(name)
        timeList.push(Number(time))
        amountList.push(Number(amount))
        cityList.push(city)
        invalid.set(i , false)
    }
    
    for (let i = 0; i < transactions.length; i++) {
        if (amountList[i] > 1000) {
            invalid.set(i, true)
        }
        for (let j = i + 1; j < transactions.length; j++) {
            const timeDiff = Math.abs(timeList[i] - timeList[j])
            if ((nameList[i] === nameList[j]) && (timeDiff <= 60) && (cityList[i] !== cityList[j])) {
                invalid.set(i, true)
                invalid.set(j, true)
            }
        }
    }
    let res = []
    for (let i = 0 ; i < transactions.length; i++) {
        if (invalid.get(i)) res.push(transactions[i])
    }
    return res
};
/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    let nameList = [], timeList = [], amountList = [], cityList = []
    let invalid = new Map()
    const len = transactions.length
    
    for (let i = 0; i < len; i++) {
        invalid.set(i, false)
    };
    
    for (let t of transactions) {
        const [name, time, amount, city] = t.split(',')
        nameList.push(name);
        timeList.push(time);
        amountList.push(amount);
        cityList.push(city);
    };
    
    for (let i = 0; i < len; i++) {
        if (amountList[i] > 1000) {
            invalid.set(i, true);
        };
        for(let j = i + 1; j < len; j++) {
            const timeDiff = Math.abs(timeList[i] - timeList[j])
            if ((nameList[i] === nameList[j]) && (cityList[i] !== cityList[j]) && (timeDiff <= 60)) {
                invalid.set(i, true);
                invalid.set(j, true);
            };
        };
    };
    
    let res = []
    for (let i = 0; i < len; i++) {
        if(invalid.get(i)) res.push(transactions[i])
    }
    return res
};
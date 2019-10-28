function moneyToCoin(num) {
    let pecahan = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]

    let result = []
    for (let i = 0; i < pecahan.length; i++) {
        if (num >= pecahan[i]) {
            while (num >= pecahan[i]) {
                result.push(pecahan[i])
                num -= pecahan[i]
            }
        }
    }
    return result
}

console.log(moneyToCoin(543))
//[500, 20, 20, 1, 1, 1]

console.log(moneyToCoin(7752))
//[5000, 2000, 500, 200, 50, 1, 1]

console.log(moneyToCoin(37454))
//[10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1]
let coins = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]

function convertToCoin(nominal) {
    let resultConvert = []
    let count = 0
    while (nominal !== 0) {
        if (nominal >= coins[count]) {
            resultConvert.push(coins[count])
            nominal -= coins[count]
        } else {
            count++
        }
    }
    return resultConvert
}

console.log(convertToCoin(543))
console.log(convertToCoin(7752))
console.log(convertToCoin(37454))


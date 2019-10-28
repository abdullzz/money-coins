function convertToCoin(num){
    let coin = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]

    let result = []
    let calculate = num

    while(calculate > 0){
        for (let i = 0; i < coin.length; i++){
            if(calculate % coin[i] !== calculate){
                result.push(coin[i])
                calculate -= coin[i]
                break
            }
        }
    }
    return result
}

console.log(convertToCoin(543))
//Output : [500, 20, 20, 1, 1, 1]
console.log(convertToCoin(7752))
//Output : [5000, 2000, 500, 200, 50, 1, 1]
console.log(convertToCoin(37454))
//Output : [10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1]
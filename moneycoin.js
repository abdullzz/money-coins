function convertToCoin(num){
    coins = [10000,5000,2000,1000,500,200,100,50,20,10,1]
    let res = []

    for(let coin of coins){
        while(num>=coin){
            res.push(coin)
            num-=coin
        }
    }
    return res
}

console.log(convertToCoin(543))
console.log(convertToCoin(7752))
console.log(convertToCoin(37454))
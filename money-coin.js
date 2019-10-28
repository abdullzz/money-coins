function convertToCoin(money){
    var coins = [ 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1 ]
    // var result = []
    // for(var coin of coins){
    //     while(money >= coin){
    //         money -= coin
    //         result.push(coin)
    //     }
    // }
    // return result

    for(var coin of coins){
        if(money >= coin) {
            return [coin].concat(convertToCoin(money-coin))
        }
    }
    return []
}

console.log(convertToCoin(543));
// output : [ 500, 20, 20, 1, 1, 1 ]
console.log(convertToCoin(7752));
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]
console.log(convertToCoin(37454));
// output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]
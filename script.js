function convertToCoin(num){
  var res = []
  var coin = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
  for (var i = 0; i < coin.length; i += 1){
    while (num >= coin[i]){
      num -= coin[i]
      res.push(coin[i])
    }
  }
  return res
}

console.log(convertToCoin(543))
console.log(convertToCoin(7752))
console.log(convertToCoin(37454))

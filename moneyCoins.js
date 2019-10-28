let counter = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]

function convertToCoin(money) {
  let result = []

  counter.forEach(coin => {
    while (money >= coin) {
      result.push(coin)
      money -= coin
    }
  });

  return result
}

console.log(convertToCoin(543))
console.log(convertToCoin(7752))
console.log(convertToCoin(37454))
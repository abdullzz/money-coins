function convertToCoin (number) {
  let devider = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20 , 10, 1]
  let result = []

  for (let num of devider) {
    while (number >= num) {
      if (Math.floor(number / num) >= 1) {
        result.push(num)
        number -= num
      }
    }
  }

  return result
}

console.log(convertToCoin(543))
//output: [ 500, 20, 20, 1, 1, 1 ]
console.log(convertToCoin(7752))
//output: [ 5000, 2000, 500, 200, 50, 1, 1 ]
console.log(convertToCoin(37454))
//output: [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]

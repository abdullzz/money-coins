/**
 * coins ; 1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000
 */

function convertToCoin(num) {
  //...
  var coins = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000],
    result = [];
  for (let i = 0; i < coins.length; i++) {
    while (num >= coins[coins.length - 1 - i]) {
      result.push(coins[coins.length - 1 - i]);
      num -= coins[coins.length - 1 - i];
    }
  }
  return result;
}

// test case
console.log(convertToCoin(543)); // [500, 20, 20, 1, 1, 1]
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));

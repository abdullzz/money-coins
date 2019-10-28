/*
coins = [10000,5000,2000,1000,500,200,100,50,20]
*/

function convertToCoin(num) {
  var coins = [10000,5000,2000,1000,500,200,100,50,20,10,1];
  var result = [];
  var temp = 0;

  for(var i=0; i<coins.length; i++) {
    //temp = num-coins[i];
    while(num>=coins[i]) {
      result.push(coins[i]);
      num = num-coins[i];
    }
  }
  return result;
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
console.log(convertToCoin(137454));

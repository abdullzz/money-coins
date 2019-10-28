// function convertToCoin(n) {
//   let ref = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
//   let result = [];
//   if (n <= 0) {
//     return result;
//   }
//   for (let i = 0; i < ref.length; i++) {
//     while (n >= ref[i]) {
//       result.push(ref[i]);
//       n -= ref[i];
//     }
//   }
//   return result;
// }

//Recursive
/*
function convertToCoin(n) {
  let ref = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  let result = [];
  if (n <= 0) {
    return result;
  }
  for (let i = 0; i < ref.length; i++) {
    if (n >= ref[i]) {
      result.push(ref[i]);
      return result.concat(convertToCoin(n-ref[i]));
    }
  }
}
*/

console.log(convertToCoin(37454));
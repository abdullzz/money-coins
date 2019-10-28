// function convertToCoin(num) {
//   var division = 1;
//   var limit = false;
//   var results = [];

//   while(limit == false) {
//     if(num%division != num) division *= 10;
//     else {
//       division /= 10;
//       limit = true;
//     }
//   }
  
//   while(division >= 1) {
//     var remainder = num%division;
//     var biggerRemainder = num-remainder;
//     var multiplier = biggerRemainder/division;

//     if(division == 10000) {
//       for(var i = 0; i < multiplier; i++) {
//         results.push(division);
//         num -= division;
//       }

//     } else if(division > 1) {
//       if(multiplier >= 5) {
//         results.push(division*5);
//         num -= division*5;

//         multiplier -= 5;
//       }

//       if(multiplier%2 == 0) {
//         var counter = 0;
//         for(var i = 0; i < multiplier/2; i++) {
//           results.push(division*2);
//           num -= division*2;

//           counter += 1;
//         }

//         multiplier -= i*2;
//       } else {
//         results.push(division);
//       }
//     }

//     division /= 10;
//   }

//   return results;
// }

var dict = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];

function tooBig(num1, num2) {
  if(num1%num2 == num1) return true;
  else return false;
}

function convertToCoin(num) {
  var results = [];
  
  for(var i in dict) {
    var notTooBig = true;

    while(notTooBig) {
      if(tooBig(num, dict[i])) notTooBig = false;
      else {
        results.push(dict[i]);
        num -= dict[i];
      }
    }
  }

  return results;
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
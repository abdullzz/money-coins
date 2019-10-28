
var pecahan = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]

function covertToCoin(num){
    var duit = num
    var arr =[]
    for ( let i = 0; i < pecahan.length; i++){
        while (duit >= pecahan[i]){
            arr.push(pecahan[i])
            duit = duit - pecahan[i]
        }
    }
    return arr
}

console.log(covertToCoin(543))
console.log(covertToCoin(7752))
console.log(covertToCoin(37454))
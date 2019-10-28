function convertToCoin (angka) {
    let result = [];
    let pecahan = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
    
    for (let i = pecahan.length; i >= 0; i--) {
        if (angka >= pecahan[i]) {
            while (pecahan[i] <= angka) {
                result.push(pecahan[i]);
                angka = angka - pecahan[i]
            }
        }
    }
    return result;
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
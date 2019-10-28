function moneyCoins(num) {
    let batas = 0;
    let change = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
    let results = [];
    for(let i = change.length - 1; i >= 0; i--) {
        while(change[i] <= num) {
            num -= change[i];
            results.push(change[i]);
        }
    }
    return results;
}

console.log(moneyCoins(543));
console.log(moneyCoins(7752));
console.log(moneyCoins(37454));

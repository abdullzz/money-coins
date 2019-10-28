function convertToCoin(coin){
    let output = []
    const pecahan = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
    for(let i = 0; i < pecahan.length; i++) {
        while(coin%pecahan[i] < coin) {
            output.push(pecahan[i])
            coin -= pecahan[i]
        }
    }
    console.log(output)
};

convertToCoin(543)
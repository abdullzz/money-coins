    function ConvertToCoin(num){
    result = []
    pecahan = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
    
    for(i = 0; i < pecahan.length; i++) 
    {
        while(num >= pecahan[i]) {
            result.push(pecahan[i])
            num -= pecahan[i]
        }
    }
    return result
};

console.log(numberToCoin(312))

function convertToCoin(num){
    var acuan = [10000,5000,2000,1000,500,200,100,50,20,10,1]
    var result = []
    while(num > 0){
        for(var i = 0; i < acuan.length; i++){
            if((num - acuan[i]) >= 0){
                result.push(acuan[i])
                num -= acuan[i]
                break
            }
        }
    }
    return result
}
console.log(convertToCoin(743))
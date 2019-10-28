function converToCoin(a){
    var res =[]
    var pecahan = [10000,5000,2000,1000,500,200,100,50,20,10,1]
    
    for (let i = 0; i < pecahan.length; i++) {
        while(a >= pecahan[i]){
            res.push(pecahan[i])
            a-=pecahan[i]
        }
        
    }
    return res
}


console.log(converToCoin(7752));

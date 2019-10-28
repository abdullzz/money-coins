var obj = {
    a : 10000,
    b : 5000,
    c : 2000,
    d : 1000,
    e : 500,
    f : 200,
    g : 100,
    h : 50,
    i : 20,
    j : 10,
    k : 1
}

function convertToCoin(num) {
    if(num == 1){
        return 1
    }else{
        for(key in obj){
            if(num-obj[key]>0){
                return [obj[key]].concat(convertToCoin(num-obj[key]))
            }
        }
    }
}

console.log(convertToCoin(543));
console.log(convertToCoin(7752));
console.log(convertToCoin(37454));
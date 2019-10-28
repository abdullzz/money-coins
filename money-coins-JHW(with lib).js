

function convertToCoin (angka)
{
    console.log('\n', angka, '\n', '-------------------------------------');
    
    var delimiter = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]


    var result = []
    for (var x = 0; x < delimiter.length; x++)
      {
        while(angka >= delimiter[x])
          {
            result.push(delimiter[x])
            angka -= delimiter[x]
            
          }

      }
    return result
}





console.log(convertToCoin(543))
//output : [500, 20, 20, 1, 1, 1]

console.log(convertToCoin(7752))
// output: [5000, 2000, 500, 200, 50, 1, 1]

console.log(convertToCoin(37454))
// output: [10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1]
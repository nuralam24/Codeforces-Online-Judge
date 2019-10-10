//var input = readline()
 
var ar = readline().split(' ').map(x => parseInt(x)) 
ar.sort((a, b) => a - b)
var k = [ar[3]-ar[2], ar[3]-ar[1], ar[3]-ar[0]]
print(k.join(' '))
 
//

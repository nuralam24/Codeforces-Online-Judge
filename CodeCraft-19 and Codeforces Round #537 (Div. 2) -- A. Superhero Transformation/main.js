//var input = readline()
 
var a = readline()
var b = readline()
 
var L1 = a.length
var L2 = b.length
 
var k = /[aeiou]/g
var o = /[^aeiou1]/g
 
var n = a.replace(k, '1')
var m = b.replace(k, '1')
 
var x = n.replace(o, '0')
var y = m.replace(o, '0')
//print('x = '+x +' '+ y)
 
 
if(L1 != L2) print('No')
else print(x == y ? 'Yes' : 'No');
 
//

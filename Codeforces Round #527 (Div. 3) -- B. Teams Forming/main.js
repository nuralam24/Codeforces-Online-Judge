//var input = readline()
var k = readline()
 
var n = readline().split(' ')
n.sort((a, b) => (a - b))
 
var a = 0, b = 0
for(var i=0; i<k; i+=2) {
     a += parseInt(n[i]); 
}
for(var i=1; i<k; i+=2) {
    b += parseInt(n[i]); 
}
 
print(Math.abs(a-b));

//

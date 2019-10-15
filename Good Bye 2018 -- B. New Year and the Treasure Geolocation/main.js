//var input = readline()
var t = parseInt(readline());
 
var x = 0, y = 0;
for(var i=0; i<t*2; i++) {
    var ar = readline().split(' ').map(x => parseInt(x));
    var a = ar[0], b = ar[1];
    x += a , y += b;
}
print(x/t  +' '+  y/t);
 
//

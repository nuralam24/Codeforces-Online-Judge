//var input = readline()
var ar = readline().split(' ').map(x => parseInt(x));
var a = ar[0], b = ar[1];
 
if(a < b  &&  Math.abs(a-b) == 1) {
    print(a +' '+ b);
}
else if(a == 9 && b == 1) {
    print(9 +' '+ 10);
}
else print(a == b ? a+'1' +' '+ b+'2' : -1);
 
//

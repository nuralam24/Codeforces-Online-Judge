//var input = readline()
var t = parseInt(readline());
 
for(var i=0; i<t; i++) {
    var ar = readline().split(' ');
    var arr = ar.map(Number);
    var a = arr[0];
    var b = arr[1];
    var c = arr[2];
    var d = arr[3];
    
    var n = a+1;
    var m = c+1;
 
    if(n == m) print(a +' '+ m);
    else print(n +' '+ m);
}
 
//

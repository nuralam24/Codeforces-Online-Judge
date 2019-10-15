//var input = readline()
var T = parseInt(readline());
 
for(var i=0; i<T; i++) {
    var ar = readline().split(' ').map(x => parseInt(x));
    var a = ar[0], b = ar[1];
    print(a +' '+ 2*a);
}

//

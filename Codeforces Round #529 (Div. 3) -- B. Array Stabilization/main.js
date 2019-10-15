//var input = readline()
var t = parseInt(readline());
 
var ar = readline().split(' ').map(x => parseInt(x));
var n = ar.sort((a, b) => (a - b));
 
var mx = -Infinity, mn = Infinity
for(var i=0; i<t; i++) {
     //mx = Math.max(mx, n[i])
     mn = Math.min(n[t-2] - n[0], n[t-1] - n[1]);
}
print(mn)
 
//

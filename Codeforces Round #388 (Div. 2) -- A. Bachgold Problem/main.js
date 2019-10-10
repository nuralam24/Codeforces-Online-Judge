//var input = readline()
var n = parseInt(readline())
 
var k = parseInt(n / 2)
if(n % 2 == 0) {
    print(k)
    for(var i=1; i<=k; i++) {
        print(2 +' ')
    }
}
else {
    print(k)
    for(var i=1; i<k; i++) {
        print(2 +' ')
    }
    print(3)
}
 
 
//

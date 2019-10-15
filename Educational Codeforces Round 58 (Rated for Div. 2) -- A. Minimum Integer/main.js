//var input = readline()
var t = parseInt(readline())
 
for(var i=0; i<t; i++) {
    var n = readline().split(' ')
    var a = parseInt(n[0])
    var b = parseInt(n[1])
    var c = parseInt(n[2])
    
    if(a>c || b<c) print(c)
    else {
        var k = parseInt(b / c)
        //print(k)
        k++
        print(k * c)
    }
}
 
//

//var input = readline()
var k = readline()
 
for(var i=0; i<k; i++){
    var n = readline()
 
    var m = n.split('').sort().join('')
    // //print('sort: '+ m)
    
    // var L = Math.ceil(n.length/2)-1
    // var middle = n[L]
    // var first = n[0]
    // //print(first +' '+ middle)
 
    // arr.splice(0,1,middle)
    // arr.splice(L,1,first)
    // var change = arr.join('')
    // //print(change)
    
    // var a = n.split("").reverse().join("") 
    // var c = /^(.)\1+$/.test(n) // check input same letter
    // //print(c)
 
     if(m[0] == m.slice(-1)) print(-1)
    // else if(n == a) print(change)
     else print (m)
 
}

//

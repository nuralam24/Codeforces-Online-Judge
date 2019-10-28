//var input = readline()
var T = parseInt(readline());
 
var f1 = false;
for(var i=0; i<T; i++) {
 
        var ar = readline().split(' ').map(x => parseInt(x));
        
        if(ar % 2 === 0) {
                print(ar / 2);
                
        } else if(f1) {
                print(Math.floor(ar / 2));
                f1 = false;
                
        } else {
                print(Math.ceil(ar / 2));
                f1 = true;
        }
}
 
//

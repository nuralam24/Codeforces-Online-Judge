//var input = readline()
var t = readline()
 
for(var i=0; i<t; i++) {
    var ar = readline().split(' ').map(x => parseInt());
    var a = ar[0], b = ar[1];
 
    var all = 'abcdefghijklmnopqrstuvwxyz';
    var h = 0;
    for(var i=0; i<a; i++) {
                write(all[h]);
                h++;
                if(h == b){
                    h = 0;
                }
        } print('\n');
}

//

//var input = readline()
var test = parseInt(readline());
 
while(test --) {
        var n = parseInt(readline());
        var str = readline();
 
        if(str.length == 2 && str[0] >= str[1]) print('NO')
        else {
                print('YES');
                print(2);
                write(str[0] +' ');
                write(str.slice(1) +' '+ '\n');
        }
}
 
//

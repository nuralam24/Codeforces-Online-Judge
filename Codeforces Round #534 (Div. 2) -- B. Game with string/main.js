//var input = readline()

var str = readline()
 
var ans = [];
    var cnt = 0;
    for (var j=0; j<str.length; j++) {
          if (ans[ans.length-1] == str[j]) {
            //while(s[j] == s[j+1] && s.length > 0) {
                ans.pop();
                //print('pop = '+ ans.join(''));
			    cnt ++;
            }
		    else {
                ans.push(str[j]);
                //print('push = '+ ans.join(''))
            }
}
if(cnt == 0) print('NO')
else {
      print(cnt %2 == 1 ? 'YES' : 'NO')
  }
 
//

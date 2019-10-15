//var input = readline()
var s = readline();
 
var a = s.replace(/0*$/g, '');           // last char zero delete
var b = a.split('').reverse().join('');  // palindrome check
 
print(a == b ? 'YES' : 'NO');
 
//

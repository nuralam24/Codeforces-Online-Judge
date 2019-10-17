//var input = readline()
var T = parseInt(readline());  
var s = readline().toLowerCase();
 
var Letter = 'abcdefghijklmnopqrstuvwxyz';
var check = s.split("").sort().join("").replace(/(.)(?=.*\1)/g, "");  // remove duplicate character & sort
 
print(Letter === check ? 'YES' : 'NO'); 

//

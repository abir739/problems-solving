// Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.
 function repeatStr(nbr,str){
    let Newstr = "";
    for(let i=0; i< nbr; i++){
      
        Newstr += str;
    }
    return Newstr;
 }

 console.log(repeatStr(3,"ha"));

 function repeatString(n,s){
    return s.repeat(n);
 }

 console.log(repeatString(5," abir "));
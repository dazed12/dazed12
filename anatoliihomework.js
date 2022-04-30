// let q = 2 ** 10

// for(let i = 2; i <= q ; i = i * 2) {
//     console.log(i);
// }



// let t = ""
// let w = ":)"
// for (let i = 0; i <= 5; i++){
//     t += w
 
// console.log (t)
// }





function palindrome(string){
   let reverseString = '';
    for(let k in string){
       reverseString += string[(string.length - k) - 1];
    }
  if(string === reverseString){
    console.log('Hey there palindrome');
  }else{
    console.log('You are not a palindrome');
  }
}
palindrome('ab1=1ba');
palindrome('Abba');



function timeFromSecs(seconds)
{
    return(

    Math.floor(seconds/2678400)+'m :'+ 
    Math.floor(((seconds/86400)%1)*30)+'d :'+
    Math.floor(((seconds/86400)%1)*24)+'h : '+
    Math.floor(((seconds/3600)%1)*60)+'m : '+
    Math.round(((seconds/60)%1)*60)+'s');
}
console.log (timeFromSecs(12840100))
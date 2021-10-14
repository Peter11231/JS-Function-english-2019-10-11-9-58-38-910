 function palindrome(message){
    // wirte your code here
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true

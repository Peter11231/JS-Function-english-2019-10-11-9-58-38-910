function reverseString(message){
    // wirte your code here
    var splitstr = message.split(""); 
    var rearr = splitstr.reverse(); 
    var joint = rearr.join(""); 
    return joint;
  }
  reverseString('hello'); // should return 'olleh'

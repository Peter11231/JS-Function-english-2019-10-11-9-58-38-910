function reverseString(message) {
 
    var splitstr = message.split(""); 
    var rearr = splitstr.reverse(); 
    var joint = rearr.join(""); 
    return joint; 
}
 
console.log( reverseString("hello"))

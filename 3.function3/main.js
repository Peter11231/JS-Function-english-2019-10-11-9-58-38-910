  function alphabetSort(message){
    // wirte your code here
    var splitstr = message.split(""); 
    var rearr = splitstr.sort(); 
    var joint = rearr.join(""); 
    return joint
  }
  alphabetSort('hello'); // should return 'ehllo'

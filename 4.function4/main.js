function countWords(message){
    // wirte your code here
    message = message.replace(/(^\message*)|(\message*$)/gi,"");
    message = message.replace(/[ ]{2,}/gi," ");
    message = message.replace(/\n /,"\n"); 
    return message.split(' ').filter(function(str){return str!="";}).length;
    
  }
  countWords('Good morning, I love JavaScript .'); 

//var katzDeliLine = [];

function takeANumber(katzDeliLine){
  let currentTicketNumber = n
  return ("Welcome, you are ticket number" + + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + name + ".";
  }
}
      function currentLine(line){
     var long = [ ];
     if (line.length === 0){
       return "The line is currently empty.";
     }
     else { 
       for (var i = 0; i < line.length; i++){
       long.push( " " + (i+ 1) + ". " + line[i]);
     }
     
       return "The line is currently:" + long; 
   }
 }
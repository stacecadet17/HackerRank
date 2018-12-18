function valleys(str){

  var valleys = 0;
  var hike = 0;
  //iterate thru str
  for(var i = 0; i < str.length; i++){
    if(str[i] == 'U'){
      hike++;

    }
    else if(str[i] == 'D'){
      hike--;

    }
  if(str[i] == 'U' && hike == 0){
    valleys++;
  }
}

  return valleys;
}

valleys("DDUUDDUDUUUD")

//show that if a d is present that hike has come back to zero each time is has is 1

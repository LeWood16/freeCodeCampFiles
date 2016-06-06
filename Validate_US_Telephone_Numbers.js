
function telephoneCheck(str) {
  // Good luck!
  
  // counts the amount of numbers, letters, and parentheses in str
  var numCount = 0;
  var numbers = /[0-9]/;
  var letterCount = 0;
  var letters = /[A-Za-z]/;
  var parens = /[()]/;
  var parensCount = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i].match(numbers)){
      numCount++;
    } else if (str[i].match(letters)){
      letterCount++;
    } else if (str[i].match(parens)){
      parensCount++;
    } else {
      continue;
    }
  }

  
  
  // if there aren't 7, 10, or 11, numbers, return false
  if (numCount !== 7 && numCount !== 10 && numCount !== 11){
    return false;
  // if there are any letters, return false
  } else if (letterCount > 0){
    return false;
  // if there are 11 numbers but the first isn't a one, false
  } else if (numCount === 11 && str[0] !== "1"){
    return false;
  // if there are not either 0 or 2 parentheses, return false 
  } else if (parensCount !== 0 && parensCount !== 2){
    return false;
  // if there is a parentheses on the end of the number, false
  } else if (str.indexOf(")") == 11){
    return false;
  } else {
    return true;
  }
  
  
}



telephoneCheck("(6505552368)");

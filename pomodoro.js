// for reasons of scope, the tracking of when to clear interval needs to be set in the function itself; then, the next function's intervalID can be established in that same first function; the second function, just like the first, handles its own clear interval tracking


$(document).ready(function(){
var numOne = 5;
var numTwo = 3;
var intervalID; 
  
function decrementOne(){
  $("#test-div").html("Session: " + numOne);
  numOne--;
  if (numOne < 0){
  clearInterval(intervalID);
  intervalID = setInterval(decrementTwo, 500);
  numOne = 5;
  }
}; // end decrementOne
  
function decrementTwo(){
  $("#test-div").html("Break: " + numTwo);
  numTwo--;
  if (numTwo < 0){
  clearInterval(intervalID);
  intervalID = setInterval(decrementOne, 500);
  numTwo = 3;
  }
}; // end decrementOne

$("#start").click(function(){
  intervalID = setInterval(decrementOne, 500);
}); // end start click 
  
$("#reset").click(function(){
  clearInterval(intervalID);
  numOne = 5;
  numTwo = 3;
  $("#test-div").html("Session: " + numOne + " Break: " + numTwo);

});
  
  
}); // end ready

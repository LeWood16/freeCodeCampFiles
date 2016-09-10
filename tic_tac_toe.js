/*====================================
BEST PRACTICES
-plan out your program/app on paper first (you don't have to follow it)
-each function should only be responsible for one task as a rule; this makes debugging much quicker
-document fully; comment each function, end of function, line of code, etc.
-test each step as you go; this makes debugging much quicker
====================================*/

$("#game-over").hide();


$(document).ready(function(){
  var availableSquaresArr = [0,1,2,3,4,5,6,7,8];
  var playerArr = [];
  
  function winCheck(arr){
    var won = false;
    var ticker = 0;
    var winnersArr = [[0,1,2],[3,4,5],[6,7,8],
                      [0,3,6],[1,4,7],[2,5,8],
                      [0,4,8],[2,4,6]];
    for (var i = 0; i < winnersArr.length; i++){
      ticker = 0;
      for (var j = 0; j < winnersArr[i].length; j++){
        if (arr.indexOf(winnersArr[i][j]) > -1){
          ticker++;
        } // end if loop
      } // end j for loop
      if (ticker > 2){
      won = true;
      } // end if
    } // end i for loop
    return won;
  }; // end winCheck function
  
  // picks a random value from a given array
  function rand(array){ 
    var randomNumber = array[Math.floor(Math.random() * array.length)];
    return randomNumber;
  } // end rand function
  
  function compTurn(){ // the computer makes its turn
    var val = "data-value";
    var square = rand(availableSquaresArr);
    var s = $("#main >")[data=square];
    var t = s.value;
    console.log(t);
    s.innerHTML = "O"; // I left off here <<<<<<<
  }; // end compTurn function
  
  
  function squareValues(arr){
  // changes an array value based on a user's click  
  }; // end squareValues
  
// checks if square is available and if player hasn't take the square yet  
  function takeEmOut(arr, num){ // grab player's array and data number of square clicked
    var playerIndex = arr.indexOf(num); // index of square's data number in player's array
    var availableIndex = availableSquaresArr.indexOf(num); // index of square's data number in availability array
    var notInPlayerArr = (playerIndex === -1); // boolean if index is in player's array
    var isAvailableSquare = (availableIndex > -1);  // boolean if index in in availability array
    if (notInPlayerArr && isAvailableSquare){ // if not in player's array but an available square,
      availableSquaresArr.splice(availableIndex, 1); // take data value out of availability array,
      arr.push(num); // then put in player's array
    } else { // otherwise
      return; // return out of if loop
    } // end if else loop
  }; // end takeEmOut function
  
  $("#main >").click(function(){
    var d = $(this).attr('data');
    d = +d;
    takeEmOut(playerArr, d);
      if (winCheck(playerArr) === true){
      $("#game-over").show();
      }// end if loop
    $(this).html("X");
  }); // end square click function
  
  
  function ifWinner(a){
    if (a === true){
      $("#game-over").show();
    } else {
      return;
    } // end if else loop
  } // end ifWinner function
  
  
   $("#test").click(function(){
    console.log(playerArr);
  }); // end test click function
  
  // click button
  
  // button checks its ID,
  // then takes its ID out of available squares arr,
  // then adds its ID to player's arr (or computer's arr)
  // then player's (or computer's) letter is added to the clicked button/div
  
  // then whether or not player (or computer) won is checked
  //   if player (or computer) won, a message and an option to play again is given
  
  
  
}); // end ready

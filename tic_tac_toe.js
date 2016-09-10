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
  var computerArr = [];
  
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
  
   function takeSquareComp(num, arr){ 
    var computerIndex = computerArr.indexOf(num); 
    var availableIndex = availableSquaresArr.indexOf(num); 
    var notInComputerArr = (computerIndex === -1); 
    var isAvailableSquare = (availableIndex > -1);  
    if (notInComputerArr && isAvailableSquare){ 
      availableSquaresArr.splice(availableIndex, 1);
      arr.push(num); 
    } else { 
      return; 
    } // end if else loop
  }; // end takeSquareComp function
  
  function compTurn(){ // the computer makes its turn
    var arr = $("#main >");
    var square = rand(availableSquaresArr);
    var randomSquare = arr[square];
    takeSquareComp(square, computerArr);
    if (winCheck(computerArr) === true){
      $("#game-over").show();
    }// end if loop
    randomSquare.innerHTML = "O";
    randomSquare.className = "filled";
   
    
//    s.innerHTML = "O"; // I left off here <<<<<<<
  }; // end compTurn function
  
// checks if square is available and if player hasn't taken the square yet  
  function takeSquare(num, arr){ 
    var playerIndex = playerArr.indexOf(num); 
    var availableIndex = availableSquaresArr.indexOf(num); 
    var notInPlayerArr = (playerIndex === -1); 
    var isAvailableSquare = (availableIndex > -1);  
    if (notInPlayerArr && isAvailableSquare){ 
      availableSquaresArr.splice(availableIndex, 1);
      arr.push(num); 
    } else { 
      return; 
    } // end if else loop
  }; // end takeEmOut function
  
 
  
  $("#main >").click(function(){
    var d = $(this).attr('data');
    d = +d;
    takeSquare(d, playerArr);
    if (winCheck(playerArr) === true){
      $("#game-over").show();
    }// end if loop
    $(this).html("X");
    $(this).attr("class", "filled");
    compTurn();
  }); // end square click function
  
  
   $("#test").click(function(){
     compTurn();
     console.log(computerArr);
  }); // end test click function
  
  // click button
  
  // button checks its ID,
  // then takes its ID out of available squares arr,
  // then adds its ID to player's arr (or computer's arr)
  // then player's (or computer's) letter is added to the clicked button/div
  
  // then whether or not player (or computer) won is checked
  //   if player (or computer) won, a message and an option to play again is given
  
  
  
}); // end ready

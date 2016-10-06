
/*==================================================================
-speed up on the 5th, 9th, and 13th step

USER STORIES
-Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step
-If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again
-I can see how many steps are in the current series of button presses
-If I want to restart, I can hit a button to do so, and the game will return to a single step
-I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses
-I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.

BEST PRACTICES
-functions must have one responsibility; if they need to be more advanced, you need more functions; this helps in debugging and speeds up testing tremendously
-comment each function/end of loop/etc; this helps with documentation
-think twice code once
-if you get brain fog, STAAAAAHP; go do sometin else :D
==================================================================*/

$(document).ready(function(){  
  
  
  
//===== color object module =======================================
  
  var audio1 = $("audio")[0];
  var audio2 = $("audio")[1];
  var audio3 = $("audio")[2];
  var audio4 = $("audio")[3];
  
  var rates = [885.5, 736.6, 580.7];
  var audioRates = [0.9, 1.25, 1.45];
  var t = rates[0];
  var a = audioRates[0];
  
  var colors = {
    blue : function(){
      audio1.play();
      $("#blue").animate(
        {
          backgroundColor: '#0040ff'          
        },
        1).animate(
        {
          backgroundColor: '#000066'
        },
        t
      ); // end animate 
    }, // end blue function
  
    green : function(){
      audio2.play();
      $("#green").animate(
        {
          backgroundColor: '#00cc00'          
        },
        1).animate(
        {
          backgroundColor: '#007000'
        },
        t
      ); // end animate 
    }, // end green function
  
    yellow : function(){
      audio3.play();
      $("#yellow").animate(
        {
          backgroundColor: '#F9F910'          
        },
        1).animate(
        {
          backgroundColor: '#909000'
        },
        t
      ); // end animate 
    }, // end yellow function
  
    red : function(){
      audio4.play();
      $("#red").animate(
        {
          backgroundColor: '#FF0000'          
        },
        1).animate(
        {
          backgroundColor: '#9F0000'
        },
        t
      ); // end animate 
    } // end red function
}; // end colors object
  
    function ifWrongAnimation(){
    $("#score").animate(
        {
          backgroundColor: '#FF0000',
          color: '#FFFFFF'
        },
        200).animate(
        {
          backgroundColor: '#9F0000'
        },
        200).animate(
        {
          backgroundColor: '#FF0000'          
        },
        200).animate(
        {
          backgroundColor: '#9F0000'
        },
        200).animate(
        {
          backgroundColor: '#FF0000'          
        },
        200).animate(
        {
          backgroundColor: '#9F0000'
        },
        200).animate(
        {
          backgroundColor: '#FF0000'
        },
        200).animate(
        {
          backgroundColor: '#9F0000'          
        },
        200).animate(
        {
          backgroundColor: '#FFFFFF',
          color: '#000000'
        },
        1000
      ); // end animate 
    } // end ifWrongAnimation function  
  //*** consider slimming this down too
   var series = [colors.green,
                 colors.red,
                 colors.yellow,
                 colors.blue
                ];
  
  function green(){
    series[0]();
  }; // end red function
  
  function red(){
    series[1]();
  }; // end red function
  
  function yellow(){
    series[2]();
  }; // end red function
  
  function blue(){
    series[3]();
  }; // end red function
  
  $("#red").click(function(){ 
    colors.red();
  }); // end red click functiom
  
  $("#green").click(function(){
    colors.green();
  }); // end green click functiom
  
  $("#blue").click(function(){
    colors.blue();
  }); // end blue click functiom
  
  $("#yellow").click(function(){
    colors.yellow();
  }); // end yellow click functiom

// ===== end color object module ====================================
  
  
  
// ===== speed change module ========================================
 //*** change to for loops to save space 
function slow(){
    audio1.playbackRate = audioRates[0];
    audio2.playbackRate = audioRates[0];
    audio3.playbackRate = audioRates[0];
    audio4.playbackRate = audioRates[0];
    t = rates[0];
  }; // end slow function
  
  function medium(){
    audio1.playbackRate = audioRates[1];
    audio2.playbackRate = audioRates[1];
    audio3.playbackRate = audioRates[1];
    audio4.playbackRate = audioRates[1];
    t = rates[1];
  }; // end medium function
  
  function fast(){
    audio1.playbackRate = audioRates[2];
    audio2.playbackRate = audioRates[2];
    audio3.playbackRate = audioRates[2];
    audio4.playbackRate = audioRates[2];
    t = rates[2];
  }; // end fast function
  
   $("#slow").click(function(){
    slow();
  }); // end slow button
  
  $("#medium").click(function(){
    medium();
  }); // end medium button
  
  $("#fast").click(function(){
    fast();
  }); // end fast button
  
// ===== end speed change module ====================================
  
  
  
// ===== random series generator module =============================
  
  var arr = [0,1,2,3];
  var patternArr = [];
  var intervalID;
  var strictMode = false;
  
  function rand(){ 
    return arr[Math.floor(Math.random() * arr.length)];
  }; // end rand function
  
  function addColorToStack(){ // pushes a color to patternArr
    var randomNum = rand();
    patternArr.push(randomNum);
  }; // end addColorToStack function
 
  function fireCurrentColor(a){ // invokes the given color animation
    if (a === 0){
      green();
    } else if (a === 1){
      red();
    } else if (a === 2){
      yellow();
    } else {
      blue();
    }
  }; // end fireCurrentColor function
 
  var c = 0;
  var j = 0; 
  var playerChoiceIndex = 0;
  var playerArr = []; // array for storing player guesses
  
  function fireColorMagazine(){
    playerChoiceIndex = 0;
    c = patternArr[j];   // store current color choice
    fireCurrentColor(c); // invoke current color choice
    j++;                 // move to next choice
    if (j > patternArr.length - 1){
      clearInterval(intervalID);
      j = 0;
    }                    // stop at end of sequence
  }; // end fireColorMagazine function
  
  
  function outputScore(){
    var currentScore = patternArr.length;
    
    if (currentScore > 4){
      medium();
    } else if (currentScore > 8){
      fast();
    }
    
    if (patternArr.length < 10){
      $("#score").html("0" + currentScore);
    } else {
    $("#score").html(currentScore);
    }
  }; // end outputScore function
  
  function runGame(){
    playerChoiceIndex = 0;
    // addColorToStack();
    intervalID = setInterval(fireColorMagazine, t);
    playerArr = [];
    outputScore();
  }; // end runGame function
  
  $("#clear-interval").click(function(){
    clearInterval(intervalID);
  }); // end yellow click functiom
  
   $("#test").click(function(){
     setTimeout(runGame, 300);
    //  runGame();
     console.log("patternArr:" + patternArr);
    /*=====
     when a color button is clicked:
       logs the button as the 0th index of playerArr
       checks whether playerArr[0] === patternArr[0]
         if yes:
            do nothing;
         if no:
            wrongChoiceAnimation();
            fire all the colors stored in patternArr(setTimemout for 1000);
    
    
    
    
    
    
    =====*/
  }); // end test button click
  
// ===== end random series generator module =========================
  
// ===== player guessing module =====================================

  
  $("#wrong-test").click(function(){
    outputScore();
    ifWrongAnimation();
  }); // end wrong-test button click function
  
  $("#main >").click(function(){
    var btnIndex = $(this).index();
    playerArr.push(btnIndex);
    var choice = sameSoFar();
    if (choice === false){
      if (strictMode === false){
        repeatSameLevel();
      } else if (strictMode === true){
        newGame();
      }
    } else if (choice === true && patternArr.length === playerArr.length){
      nextLevel();
    } else {
      return;
    }
  }); // end main children click function
  
  function nextLevel(){
    addColorToStack();
    setTimeout(runGame, 500);        
  }; // end nextLevel function
  
  function repeatSameLevel(){
    ifWrongAnimation();
    setTimeout(runGame, 500);
  }; // end repeatSameLevel function
  
  $("#start-btn").click(function(){
    newGame(); 
  }); // end start click function
  
  $("#same-test").click(function(){
    console.log("playerArr:" + playerArr);
    console.log("patternArr:" + patternArr);
    console.log(sameSoFar()); 
  }); // end start click function  
  
  
  // buttons in middle need to be moved... pressing color buttons at the same time
 
// ===== end player guessing module =================================

  function sameSoFar(){
    for (var i = 0; i < playerArr.length; i++)
      if (playerArr[i] != patternArr[i]) return false;
    return true; 
  }; // end equalArrays function
  
  function newGame(){
    patternArr = [];
    playerArr = [];
    outputScore();
    nextLevel();
  }; // end resetGame function
  
  $("#reset-btn").click(function(){
    newGame();
  }); // end reset-btn click function
  
  $("#strict").click(function(){
    // toggle strict mode
    if (strictMode === false){
      strictMode = true;
    } else if (strictMode === true){
      strictMode = false;
    }
    
    // toggle background color depending on strict mode
    if (strictMode === true){
      $("#strict").attr("class", "on");
    } else if (strictMode === false){
      $("#strict").attr("class", "off");
    }
  }); // end strict-indicator function
  
}); // end ready

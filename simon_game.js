
/*==================================================================


-first one is random, then store the first one
-only fire random function one at a time
-run all of the stored color functions (based on the dynamically built array, and then fire the single random color function)



----- build patternArr properly




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
  
  function rand(){ 
    return arr[Math.floor(Math.random() * arr.length)];
  }; // end rand function
  
  function addColorToStack(){
    var randomNum = rand();
    patternArr.push(randomNum);
  }; // end addColorToStack function
 
  function fireCurrentColor(a){
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
  
  function fireColorMagazine(){
    c = patternArr[j]; // curent patternArr index
    fireCurrentColor(c);
    j++;
    if (j > patternArr.length - 1){
      clearInterval(intervalID);
      j = 0;
    }
  }; // end fireColorMagazine function

  
  $("#test").click(function(){
    addColorToStack();
    intervalID = setInterval(fireColorMagazine, t);
  }); // end test button click
  
  $("#add-click").click(function(){
    clearInterval(intervalID);
  }); // end yellow click functiom
  
// ===== end random series generator module =========================
  
// ===== player guessing module =====================================
  var playerArr = [];
  
  $("#start").click(function(){
    addColorToStack();
    intervalID = setInterval(fireColorMagazine, t);    
  }); // end start click function
  
  
  
  
  
  
  
  

 
// ===== end player guessing module =================================
  
}); // end ready

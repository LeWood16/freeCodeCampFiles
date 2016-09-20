
/*==================================================================
USER STORIES
-I am presented with a random series of button presses
-Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step
-I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button
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

// look up differing speed settings for audio tags

// use a for loop, dynamically construct a queue for which color-functions to run when, and feed those functions one at a time to a setInterval, the time between the functions firing depending on how high the user has gotten in game level

// figure out object (or function) to use for changing properties of audio functions

$(document).ready(function(){  
  
  var audio1 = $("audio")[0];
  var audio2 = $("audio")[1];
  var audio3 = $("audio")[2];
  var audio4 = $("audio")[3];

  var arr = [0,1,2,3];
  var divArr = $("#main >");
  var series = [];
  var colorNames = ['blue', 'red', 'green', 'yellow'];
  
  var rates = [600, 400, 200];
  var audioRates = [0.5, 1, 2];
  var t = rates[0];
  var a = audioRates[0];
  
  
  
  
  function playSound(num){ // plays sound according to which button is fired
    
  }; // end playSound function
  
  function patternTrack(){ // tracks if user pressed the right buttons
    
  }; // end patternTrack function
  
 
  function pulseDivColor(){
    var d = $("#green");
    var e = divArr[0];
    var arr = $("#main >");
    var firstNode = arr[0];
   // var ID = firstNode.attr("id");
    var t = typeof ID;

    return firstNode;
  }; // end pulseDivColor function
  
  function pulse(num){ // pulses the selected square with light and noise
    var d = rand();
    
  }; // end pulse function
  
  
    // picks a random div from #main child nodes
  function rand(){ 
    var randomNumber = arr[Math.floor(Math.random() * arr.length)];
    var div = colorNames[randomNumber];
    return div;
    
  }; // end rand function
  
  
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
  
  var colors = {
    blue : function(){
      audio1.play();
      $("#blue").animate(
        {
          backgroundColor: '#0040ff'          
        },
        t).animate(
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
        t).animate(
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
        t).animate(
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
        t).animate(
        {
          backgroundColor: '#9F0000'
        },
        t
      ); // end animate 
    } // end red function
}; // end colors object
  
  function series(){ // generates random series of button clicks
    // makes an array 
    // decides how many clicks to put in array
    // decides what rate to run the clicks based on difficulty level
    
    
  }; // end series function
  
   $("#slow").click(function(){
    slow();
  }); // end slow button
  
  $("#medium").click(function(){
    medium();
  }); // end medium button
  
  $("#fast").click(function(){
    fast();
  }); // end fast button
  
  $("#test").click(function(){
    var r = "colors." + rand() + "()";
    return r;
    console.log(r);
  }); // end red function
  
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
  
}); // end ready


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


// use a for loop, dynamically construct a queue for which color-functions to run when, and feed those functions one at a time to a setInterval, the time between the functions firing depending on how high the user has gotten in game level

// figure out object (or function) to use for changing properties of audio functions

// bug: difficult to tell button presses apart when the same button is pressed consecutively; the sounds run together, and the color changes stack, so the sound finishes way before the color change, and the color flashes in silence

// figure out all rates, animation and audio;

$(document).ready(function(){  
  
  var audio1 = $("audio")[0];
  var audio2 = $("audio")[1];
  var audio3 = $("audio")[2];
  var audio4 = $("audio")[3];
  // 0.8355
  var threeQuartersDur = audio1.duration * 0.75;
  var halfDur = audio1.duration / 2;
  
  var arr = [0,1,2,3];
  var divArr = $("#main >");
  
  var rates = [835.5, 626.6, 417.7];
  var halfRates = [417.5, 313.3, 208.8];
  var audioRates = [0.75, 0.85, 1];
//  var functionRates = [750, 650, 550];
  var t = rates[0];
  var a = audioRates[0];
  
  var clickCount = 5;
  var intervalID;
   
  function patternTrack(){ // tracks if user pressed the right buttons
    
  }; // end patternTrack function
  
 
  function pulseDivColor(){
    var d = $("#green");
    var e = divArr[0];
    var arr = $("#main >");
    var firstNode = arr[0];

    return firstNode;
  }; // end pulseDivColor function
  
    // picks a random div from #main child nodes
  function rand(){ 
    var randomNumber = arr[Math.floor(Math.random() * arr.length)];
    var div = series[3];
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
        50).animate(
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
        50).animate(
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
        50).animate(
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
        50).animate(
        {
          backgroundColor: '#9F0000'
        },
        t
      ); // end animate 
    } // end red function
}; // end colors object
  
   var series = [colors.blue,
                 colors.green,
                 colors.red,
                 colors.yellow
                ];

  
   $("#slow").click(function(){
    slow();
  }); // end slow button
  
  $("#medium").click(function(){
    medium();
  }); // end medium button
  
  $("#fast").click(function(){
    fast();
  }); // end fast button
  
  function testerTime(){
    var ran = rand();
    ran();
    clickCount--;
    if (clickCount === 0){
      clearInterval(intervalID);
      clickCount = 5;
    } // end if statement
  }; // end testerTime function

  $("#test").click(function(){
    intervalID = setInterval(testerTime, t);
   // audio1.play();
   // audio1.loop = true;
  }); // end test button click
  
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
  
  $("#dur").click(function(){
    console.log(audio1.duration);
  }); // end blue click functiom
  
  
}); // end ready

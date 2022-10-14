var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keydown(function() {
  if (!started) {
    $("#level-title").html("Level " + level);
    nextSequence();
    started = true;
  }
});

// console.log(level);

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
 //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
 checkAnswer(userClickedPattern.length-1);
});


//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");
      gameOver();
      gameOver2();
      gameOver3();
      startOver();
    }

}

function nextSequence() {

  //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function gameOver() {
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
}

function gameOver2() {
  $('body').addClass("game-over");
  setTimeout(function () {
    $('body').removeClass("game-over");
  }, 200);
}

function gameOver3() {
  $("#level-title").text("Game Over, Press Any Key to Restart");
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

console.log(gamePattern);
console.log(userClickedPattern);

// Below are variants of the original code I used, along with my notes. I found animatePress on Google/Stack Overflow
// but my original code didn't work. Looking at the tutorial code, it's because I needed to call the functions
// within the .btn click function above. (I had tried to use onclick events in HTML, which worked with adding sound,
// but not with adding the animations. I refactored my code above to be more in line with the tutorial code.)

// OLD/REFACTORED CODE GOES BELOW //
// ///

// 
// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// // 1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
// function animatePress(currentColor) {

//   //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
//   $("#" + currentColor).addClass("pressed");

//   //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// // code from Stack Overflow, check... 

// function checkTheAnswer(currentLevel) {
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     console.log("success");
//     if (userClickedPattern.length === gamePattern.length) {
//       setTimeout(function () {
//         nextSequence();
//       }, 1000);
//     }
//   } else {
//     $("body").addClass("game-over");
//     setTimeout(function () {
//       $("body").removeClass("game-over");
//     }, 200);
//     gameOverAudio();
//     $("#level-title").text("Game Over, Press Any Key to Restart");
//     $("#level-title").css("font-size", "2rem");
//     startOver();
//   }
// }

// //

// $(document).one('keydown', function() {
//   nextSequence();
//   $("#level-title").html("Level 0")
// });



// $(document).ready(function () {
//   $("#" + randomChosenColour).click(function () {
//     nextSequence();
//       $('#level-title').html('Test');
//   });
// });


// alert("Hello world!")

// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];

//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
// var userClickedPattern = [];

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
// $(".btn").click(function() {

  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  // var userChosenColour = $(this).attr("id");

  //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
//   userClickedPattern.push(userChosenColour);

// //   console.log(userClickedPattern);
//     // test the code (it works!)

// });

// function nextSequence() {

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

//   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
// }

// function playSound(chosenColor) {

//     switch (chosenColor) {
//       case "green":
//         var audio = new Audio("sounds/green.mp3");
  
//         audio.autoplay = true;
//         audio.play();
//         break;
  
//       case "blue":
//         var audio = new Audio("sounds/blue.mp3");
//         audio.autoplay = true;
//         audio.play();
//         break;
  
//       case "red":
//         var audio = new Audio("sounds/red.mp3");
//         audio.autoplay = true;
//         audio.play();
  
//       case "yellow":
//         var audio = new Audio("sounds/yellow.mp3");
  
//         audio.autoplay = true;
//         audio.play();
  
//       default:
//         var audio = new Audio("sounds/wrong.mp3");
  
//         audio.autoplay = true;
//         audio.play();
//     }
// }
  
// function animatePress(currentColour) {
//     $("#" + currentColour).addClass("pressed");
//     setTimeout(function() {
//       $("#" + currentColour).removeClass("pressed");
//     }, 100);
// }
  
// Below is the code I originally wrote. I found bits of it from Google, but it mostly follows the tutorial code
// above. The only difference is where I placed some things:

// var gamePattern = [];
// var userClickedPattern = [];

// function nextSequence() {
//     var randomNumber = Math.floor(Math.random()*4);
//     var buttonColours = ["red", "blue", "green", "yellow"];
//     var randomChosenColour = buttonColours[randomNumber];
//     gamePattern.push(randomChosenColour);
//     $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
//     var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//     audio.play();

//     return gamePattern;
// }

// nextSequence();

// And here was my original code for the handler function. I was able to identify using jQuery to grab the
// button by class (".btn"), but I stumbled a bit with trying to use "this" to grab the id. I originally used
// ("#this").val(); and other approaches that didn't work quite right. So I cheated a bit and used some
// straight JavaScript rather than the jQuery approach. The below code did work for grabbing colors for
// the array, but it's not exactly ideal inasmuch as it doesn't make use of the jQuery short-cuts above.

// $(".btn").on("click", function () {
//     var randomNumber2 = Math.floor(Math.random()*4);
//     var buttonColours2 = ["red", "blue", "green", "yellow"];
//     var userChosenColour = buttonColours2[randomNumber2];
//         userClickedPattern.push(userChosenColour);
//     });

// console.log(userClickedPattern);


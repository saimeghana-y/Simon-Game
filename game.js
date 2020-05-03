var gamePattern=[];
var userClickedPattern=[];

var level=0;
var started=false;

var buttonColours=["red","blue","green","yellow"];

var randomChosenColour=buttonColours[nextSequence()];

$(document).keypress(function(){
if(!started){
    $("#level-title").text("Level"+level);
    nextSequence();
    started=true;
}
} )

$(".btn").click(function (){
    var userChosenColour=this.attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
          }else{
              playSound(wrong);
              $("body").addclass("game-over");
              setTimeout(function () {
                $("body").removeClass("pressed");
              }, 200);
              $("#level-title").text("Game Over,Press Ant Key to Restart");
              startover();
          }
    }
}

function startover(){
    level=0;
    gamePattern=[];
    started=false;
}

function animatePress(currentColour){
    $("#"+currentColour).addclass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}

function nextSequence(){
    var userClickedPattern=[];
    level++;

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
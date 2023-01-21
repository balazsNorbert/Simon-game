var userClickedPattern = [];
var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var level = 0;
function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}
nextSequence();

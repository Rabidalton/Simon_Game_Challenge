/*The first thing to do is to create an arraw of colors. The names of the colors should be 
the same as the name of the sound files before the extension .mp3.
*/
var buttonColors = ["red", "blue", "green", "yellow"];

//Next, I created an empty array.
var gamePattern = [];

/*Next, I created a function that generates a random number, use the random number to randomly
select a color, and push the randomly selected color into the empty array.
*/
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    /*I am going to use jQuery to get the ID of the random number that is choosen.
    After, I will add the fadein and fadeout animation to it. 
    */ 
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    //I am going to play a specific sound whenever a color a selected.
//That sound will be unique to that color.

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}




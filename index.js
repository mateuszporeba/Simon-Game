var counter = 0;
var gameStarted = false;
var canClick = false;
var gameSequence = [];
var playerSequenceNumber = 0;


$(document).keypress(function () {
    if (!gameStarted) {
        randomChooseNext();
        $("#level-title").text("Level: " + counter);
        canClick = true;
        gameStarted = true;
        playerSequenceNumber = 0;
        counter=0;
        gameSequence = [];
        
        while (canClick) {
            playerClick("red");
            playerClick("green");
            playerClick("yellow");
            playerClick("blue");
            canClick = false;
        }
    }
});


function playerClick(color) {
    $("." + color).click(function () {
        console.log(gameSequence[playerSequenceNumber]);
        if (gameSequence[playerSequenceNumber] == color) {
            playerSequenceNumber++;
            canClick = true
            var sound = new Audio("sounds/yellow.mp3");
            sound.play();
            if (playerSequenceNumber >= gameSequence.length) {
                playerSequenceNumber = 0;
                counter++;
                randomChooseNext()
            }
        } else if(gameStarted){
            var sound = new Audio("sounds/wrong.mp3");
            sound.play();

            $("body").addClass("game-over");
            setTimeout(() => {
                $("body").removeClass("game-over");
            }, 600);

            $("#level-title").text("Press A Key to Start");
            gameStarted = false;
        }
    });
}

function randomChooseNext() {
    var btnNumber = Math.floor(Math.random() * 4);

    switch (btnNumber) {
        case 0:
            $(".red").addClass("pressed");
            gameSequence[counter] = ("red");
            setTimeout(() => {
                $(".red").removeClass("pressed");
            }, 400);
            break;
        case 1:
            $(".green").addClass("pressed");
            gameSequence[counter] = ("green");
            setTimeout(() => {
                $(".green").removeClass("pressed");
            }, 400);
            break;
        case 2:
            $(".yellow").addClass("pressed");
            gameSequence[counter] = ("yellow");
            setTimeout(() => {
                $(".yellow").removeClass("pressed");
            }, 400);
            break;
        case 3:
            $(".blue").addClass("pressed");
            gameSequence[counter] = ("blue");
            setTimeout(() => {
                $(".blue").removeClass("pressed");
            }, 400);
            break;
        default:
            break;
    }
    console.log(gameSequence[counter]);
}
































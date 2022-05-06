var counter = 0;
var gameStarted = false;
var canClick = false;
var gameSequence = [];
var playerSequenceNumber = 0;


$(document).keypress(function () {
    if (!gameStarted) {
        gameSequence = [];
        counter = 0;
        randomChooseNext();
        $("#level-title").text("Level: " + counter);
        gameStarted = true;
        playerSequenceNumber = 0;
    }
});

playerClick("red");
playerClick("green");
playerClick("yellow");
playerClick("blue");

function playerClick(color) {

    $("." + color).mousedown(function () {

        if (gameSequence[playerSequenceNumber] == color) {
            playerSequenceNumber++;

            var sound = new Audio("sounds/yellow.mp3");
            sound.play();
            canClick = true
            if (playerSequenceNumber >= gameSequence.length) {
                playerSequenceNumber = 0;
                counter++;
                randomChooseNext()
            }
        } else if (gameStarted) {
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
    let btnNumber = Math.floor(Math.random() * 4);

    setTimeout(() => {
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
        console.log("gameSequence losowanie:" + gameSequence);
    }, 500);
}
































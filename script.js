var counter = 0;
var gameStarted = false;
var sequenceDone = false;
var btnReadyForClick = true;
var canClick = false;
var gameSequence = [];
var playerSequenceNumber = 0;

if (!gameStarted) {
    $(document).keypress(function () {
        randomChooseNext();
        $("#level-title").text("Level: " + counter);
        canClick = true;
        gameStarted = true;
        while (canClick) {
            playerClick("red");
            playerClick("green");
            playerClick("yellow");
            playerClick("blue");
            canClick = false;
        }
    });
}

function playerClick(color) {
    setTimeout(() => {
        $("." + color).click(function () {
            if (gameSequence[playerSequenceNumber] == color) {
                playerSequenceNumber++;
                canClick=true
                if (playerSequenceNumber == gameSequence.length) {
                    playerSequenceNumber = 0;
                    counter++;
                    randomChooseNext()
                }
            } else {
                $("body").addClass("game-over");
                setTimeout(() => {
                    $("body").removeClass("game-over");
                }, 600);
                counter = 0;
                $("#level-title").text("Press A Key to Start");
                gameStarted = false;
                gameSequence = [];
            }

        });
    }, 1000);
}
function randomChooseNext() {
    var btnNumber = Math.floor(Math.random() * 4);

    switch (btnNumber) {
        case 0:
            $(".red").addClass("pressed");
            setTimeout(() => {
                $(".red").removeClass("pressed");
            }, 400);
            gameSequence[counter] = ("red");
            break;
        case 1:
            $(".green").addClass("pressed");
            setTimeout(() => {
                $(".green").removeClass("pressed");
            }, 400);
            gameSequence[counter] = ("green");
            break;
        case 2:
            $(".yellow").addClass("pressed");
            setTimeout(() => {
                $(".yellow").removeClass("pressed");
            }, 400);
            gameSequence[counter] = ("yellow");
            break;
        case 3:
            $(".blue").addClass("pressed");
            setTimeout(() => {
                $(".blue").removeClass("pressed");
            }, 400);
            gameSequence[counter] = ("blue");
            break;
        default:
            break;
    }
}
































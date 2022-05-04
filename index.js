
// var gameStarted = true;
// if (gameStarted) {
//     $(document).keypress(function () {
//         RandomPickNext();
//     });
// }


$("start").click(function () { 
    e.preventDefault();
    
};
 
var gameSequence = [];

function RandomPickNext() {
    var btnNumber = Math.floor(Math.random() * 4);

    console.log(btnNumber);
    switch (btnNumber) {
        case 0:
            $(".red").addClass("pressed");
            setTimeout(() => {
                $(".red").removeClass("pressed");
            }, 400);
            gameSequence.push("red");
            break;
        case 1:
            $(".green").addClass("pressed");
            setTimeout(() => {
                $(".green").removeClass("pressed");
            }, 400);
            gameSequence.push("green");
            break;
        case 2:
            $(".yellow").addClass("pressed");
            setTimeout(() => {
                $(".yellow").removeClass("pressed");
            }, 400);
            gameSequence.push("yellow");
            break;
        case 3:
            $(".blue").addClass("pressed");
            setTimeout(() => {
                $(".blue").removeClass("pressed");
            }, 400);
            gameSequence.push("blue");
            gameStarted = false;
            break;
        default:
            break;
    }
}

// function sequence(){

// }


































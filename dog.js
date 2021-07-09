var player = "O";
var turnsTaken = 0;
var gameIsOver = false;
console.log("hi");

function changePlayers(){
    //you write the code that goes in here
    turnsTaken 	= turnsTaken +1;
    if (player === "X") {
        player = "O";
    }
    else if (player === "O"){
        player = "X";
    }
}

function performLogic(button, tile){
    //you write the code that goes in here
    $(button).hide();
    $(tile).html(player);
    changePlayers();
}

//in each of the click events below,
//uncomment the function calls to performLogic

$(document).ready(function() {
$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});
});

var player = "O";
var turnsTaken = 0;
var gameIsOver = false;


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
    if(gameIsOver === false){
       	$(button).hide();
    	$(tile).html(player);
        checkHorizontal();
        checkVertical();
        checkDiagnol();
    	changePlayers(); 
        tieGame();
    }
   
}
function tieGame(){
  if (turnsTaken > 8 && gameIsOver  ===false){
      gameIsOver =true;
      $("h1").text("tie");
  }
 
}

function checkHorizontal(tileId1, tileId2, tileId3){
   	winGame("#tile1", "#tile2", "#tile3"); 
    winGame("#tile4", "#tile5", "#tile6"); 
    winGame("#tile7", "#tile8", "#tile9");
}
function checkVertical(tileId1, tileId2, tileId3){
	winGame("#tile1", "#tile4", "#tile7"); 
    winGame("#tile2", "#tile5", "#tile8"); 
    winGame("#tile3", "#tile6", "#tile9");

}
function checkDiagnol(tileId1, tileId2, tileId3){
  	winGame("#tile1", "#tile5", "#tile9"); 
    winGame("#tile3", "#tile5", "#tile7"); 
}
function winGame(tileId1, tileId2, tileId3 ){
    if($(tileId1).html()=== player &&
       $(tileId2).html()=== player &&
       $(tileId3).html()=== player ) {
       		$("h1").text(player + " wins " );
        gameIsOver = true;
    }
}

//in each of the click events below,
//uncomment the function calls to performLogic

$( document ).ready(function() {
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
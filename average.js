/* Mr. M */
var games=0;
var turns=0;
var average=0;

function newGame(turn){
  board.className = "";
  turns+=turn; 
  games++;
  average=turns/games;  
  message=("Your average over "+games+" games is "+average+" turns. See if you can get that lower. Good luck!");
  thisTurn = [], turnRecords = [];
  myPicks.classList.add("hide");
  buttonElement.setAttribute("onclick","startGame()");
  boardReset(message);
}

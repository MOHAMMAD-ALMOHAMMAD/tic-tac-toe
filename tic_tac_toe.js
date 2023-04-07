
let board=[]
// Initializes and returns an empty 3x3 Tic Tac Toe board


function initBoard() {
  return([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
}



// Displays the current state of the board in the console
function displayBoard() {
  // Your code here
 console.log(board[0][0] + ' | ' + board[0][1] + ' |' + board[0][2]);
  console.log('-  -  -');
  console.log(board[1][0] + ' | ' + board[1][1] + ' |' + board[1][2]);
  console.log('-  -  -');
  console.log(board[2][0] + ' | ' + board[2][1] + ' |' + board[2][2]);
    console.log("\n");
}

//displayBoard();
// Places the player's move on the board if the chosen cell is unoccupied
// Returns true if the move is valid, false otherwise
function makeMove(board, row, col, player) {
  // Your code here
  if (board[row][col]==="") 
  {
    board[row][col]=player 
    return true;
  }
  else {
    console.log("This cell is already occupied,please choose another cell\n")
    return false
  }
}

// Checks if the given player has won the game
// Returns true if the player has won, false otherwise
function checkForWin(board, player) {
  // Your code here
  if (
(board[0][0] ===player && board[0][1] ===player && board[0][2] ===player)
    ||
(board[1][0] ===player && board[1][1] ===player && board[1][2] ===player) 
    || 
(board[2][0] ===player && board[2][1] ===player && board[2][2] ===player)
   ||
(board[0][0] ===player && board[1][0] ===player && board[2][0] ===player) 
  ||
(board[0][1] ===player && board[1][1] ===player && board[2][1] ===player)
  ||
(board[0][2] ===player && board[1][2] ===player && board[2][2] ===player) 
  ||
(board[0][0] ===player && board[1][1] ===player && board[2][2] ===player)
  ||
(board[0][2] ===player && board[1][1] ===player && board[2][0] ===player) ) return true;

else return false; 
}

// Checks if the game has ended in a draw
// Returns true if the game is a draw, false otherwise
function checkForDraw(board) {
  // Your code here
   let isAllFull=false
  
  for(let element of board){
    if (element.indexOf("") === -1) {
      isAllFull=true
    }
    else {
      isAllFull=false
      break
    }  
  }
  let xWin=checkForWin(board,"X")
  let oWin=checkForWin(board,"O")
  
  
  if (!(xWin || oWin) && isAllFull) {
    return true
  } 
  else return false
  
  
}
function gameLoop(){
  const players=["X","O"]
  let playerSelect=Math.floor(Math.random()*2)
  let choice="Yes"
  
  while(true){
   if(!(choice.toLowerCase()==="y" || choice.toLowerCase()==="yes")){
     console.log("Hope you had a fun time playing :)")
   break;
   }
 
   
    
    
    if(checkForDraw(board)===false){
      
 
      console.log("Its Player "+[playerSelect+1] +"'s turn "+"("+players[playerSelect]+")"+ ":")
      let row=readlineSync.questionInt("Enter the row: ")
let column=readlineSync.questionInt("Enter the column: ")

 console.log("\n");
     
    if(!makeMove(board,row,column,players[playerSelect])) continue;
       if(checkForWin(board,players[playerSelect])===true){
        
         displayBoard()
         console.log("Player "+[playerSelect+1] +" Wins\n")
  choice=readlineSync.question("Do you want to play again? ")
         console.log("\n")
         board=initBoard();
         continue;
         
       //  break;
       }
    playerSelect= !playerSelect === true ? 1 : 0;
    displayBoard();
    continue;
    }
    
else {
 console.log("Unfortunately no one won, its a draw.")
  choice=readlineSync.question("Do you want to play again? ")
  console.log("\n")
  board=initBoard();
 // break
 }
  }
  
}

function startGame(){
 console.log("The game has started \n")
  board=initBoard()
  gameLoop()
}
//startGame()
const readlineSync = require('readline-sync')
const playGame = () => startGame();

playGame();

module.exports = {
  initBoard,
  displayBoard,
 makeMove,
  checkForWin,
 checkForDraw
};

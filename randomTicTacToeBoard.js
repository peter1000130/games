//the set up for the game
var currentBoardPosition = [' ', ' ', ' ', ' ', ' ', ' ' , ' ', ' ', ' ']
var generalBoardPosition = ['0', '1', '2', '3', '4','5', '6','7','8']
var winConditions = [[0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
//Trigger to continue/stop playing or generating positions
var isWon = false;

//Function to display the board and format into console
function displayBoard (board) {
		let boardDisplay = `${board[0]}|${board[1]}|${board[2]} \n ${board[3]}|${board[4]}|${board[5]} \n ${board[6]}|${board[7]}|${board[8]} `;
		console.log (boardDisplay);
    return boardDisplay;
}

//Initial call to display board
displayBoard(generalBoardPosition);

//Generates a random number 0 to 8
function randomPosition() {
	return Math.round(Math.random()*8);
 }

//Generates a random place on the board to place the marker
 function addRandomPiece (player, board) { 
  var position = randomPosition();
  while (board[position] !== ' ') {
  	var position = randomPosition();
  }
  board[position] = player;
  displayBoard(board)
}

//Takes the player's board position and adds all values to the playerPositions array
function currentValues(player, board, playerPositions) {
  var boardPosition;
	for (boardPosition = 0; board.length > boardPosition; boardPosition++) {
		var currentPlayer = board[boardPosition];
  	if (currentPlayer === player ) {
  		playerPositions.push(boardPosition)}
	}
  return playerPositions
}


function hasWon (board) {
  var positionCheck = [];
  currentValues('X', board, positionCheck)
  console.log(positionCheck);
  for (i = 0; i < winConditions.length; i++) {
  	if (positionCheck.includes(winConditions[i][0]) && positionCheck.includes(winConditions[i][1]) && positionCheck.includes(winConditions[i][2]) ) {
			isWon = true
    }
  }
  return isWon
}


function randomBoard (board) {
  var players = ['X', 'O']
  var turn = 0;
  while (isWon === false) {
    player = players[turn%2]
    addRandomPiece(player,board);
    hasWon(board)
    turn++
  }
}

randomBoard (currentBoardPosition)
console.log (isWon)




 
/* //Adds Multiple Pieces onto the board
function addMultiplePieces (turns) {
  var counter;
  for (counter = 0; counter < turns; counter++) {
    addRandomPiece('X', currentBoardPosition);
  }
} */


 

//All code past here is for a gameplay attempt 
function playGameX (currentBoard) {
    var positionNumber = prompt('Where would you like to make your next move?');
    var indexInput = Number(positionNumber)
    if (Number.isInteger(indexInput) && (positionNumber <= 8 || positionNumber >=0)) {
    	if (currentBoard[indexInput] === ' ') {
    			currentBoard[indexInput] = 'X';
          displayBoard(currentBoardPosition)
    		}
      else {
      		console.log('Im sorry -- that position is already taken!')
        }
    }
    
    else {
    	console.log ('Please enter a valid number')
    }
}

function playGameO (currentBoard) {
    var positionNumber = prompt('Where would you like to make your next move?');
    var indexInput = Number(positionNumber)
    if (Number.isInteger(indexInput) && (positionNumber <= 8 || positionNumber >=0)) {
    	if (currentBoard[indexInput] === ' ') {
    			currentBoard[indexInput] = 'O';
          displayBoard(currentBoardPosition)
    		}
      else {
      		console.log('Im sorry -- that position is already taken!')
        }
    }
    
    else {
    	console.log ('Please enter a valid number')
    }
}

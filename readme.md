# Tic Tac Toe Exercise

Create a simple command-line Tic Tac Toe game using JavaScript. Below are the requirements for the game:

1. **Board Representation**: Represent the game board using a 2D array (3x3) initialized with empty strings or a placeholder character to indicate unoccupied spaces.

2. **Display Board**: Create a function `displayBoard()` to display the current state of the game board in the console.

3. **Make a Move**: Create a function `makeMove(board, row, col, player)` that takes the game board, row, column, and player ('X' or 'O') as arguments, and places the player's move on the board if the chosen cell is unoccupied. If the cell is already occupied, display an error message and ask the player for a new move.

4. **Check for a Win**: Implement a function `checkForWin(board, player)` that takes the game board and player as arguments, and checks for a win by the player in the current state of the board. A win occurs when a player has three of their symbols in a row, either horizontally, vertically, or diagonally. Return `true` if the player has won, and `false` otherwise.

5. **Check for a Draw**: Create a function `checkForDraw(board)` that checks if the game has ended in a draw. A draw occurs when there are no more empty cells and neither player has won. Return `true` for a draw, and `false` otherwise.

6. **Game Loop**: Implement a game loop that alternates between player 'X' and player 'O', asking for their moves and updating the game board until either a player wins or the game ends in a draw. After the game ends, display the final board state and the result (win or draw).

7. **Start the Game**: Create a function `startGame()` to initialize the game board, start the game loop, and handle the end of the game.

Note: To keep the exercise focused on JavaScript, the game will be played using the command-line interface for input and output. The `prompt()` function can be used to get user input, and `console.log()` can be used to display the game board and messages.


## Bonus: Play the Game

After implementing the game logic, you can create a function called `playGame` to allow users to play the game in the terminal. To do this, follow the steps below:

1. Install the `readline-sync` library to handle user input:

2. Import the library in your `tic_tac_toe.js` file:
```javascript
const readlineSync = require('readline-sync')
```
3. Create a function called playGame that handles the game loop and manages player input using the readline-sync library.
4. Call the playGame function at the end of the tic_tac_toe.js file to start the game when the file is executed.
5. Test your game by running the tic_tac_toe.js file in the terminal with Node.js: `node tic_tac_toe.js`

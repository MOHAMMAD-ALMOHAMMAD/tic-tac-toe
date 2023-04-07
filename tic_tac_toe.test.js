const {
  initBoard,
  makeMove,
  checkForWin,
  checkForDraw,
} = require('./tic_tac_toe'); // Make sure to export the functions in your tic_tac_toe.js file

describe('Tic Tac Toe', () => {
  test('initBoard() should return an empty 3x3 board', () => {
    const board = initBoard();
    expect(board).toEqual([['', '', ''], ['', '', ''], ['', '', '']]);
  });


  test('makeMove() should place the player\'s move on the board', () => {
    const board = initBoard();
    const boardAfterMove = [['X', '', ''], ['', '', ''], ['', '', '']];
    expect(makeMove(board, 0, 0, 'X')).toBe(true);
    expect(board).toEqual(boardAfterMove);
  });

  test('makeMove() should return false if the cell is already occupied', () => {
    const board = initBoard();
    makeMove(board, 0, 0, 'X');
    expect(makeMove(board, 0, 0, 'O')).toBe(false);
  });

  test('checkForWin() should return true for a winning board', () => {
    const winningBoard = [['X', 'X', 'X'], ['', 'O', 'O'], ['', '', '']];
    expect(checkForWin(winningBoard, 'X')).toBe(true);
    expect(checkForWin(winningBoard, 'O')).toBe(false);
  });

  test('checkForDraw() should return true for a draw board', () => {
    const drawBoard = [['X', 'O', 'X'], ['X', 'X', 'O'], ['O', 'X', 'O']];
    expect(checkForDraw(drawBoard)).toBe(true);
  });

  test('checkForDraw() should return false for a non-draw board', () => {
    const winningBoard = [['X', 'X', 'X'], ['', 'O', 'O'], ['', '', '']];
    expect(checkForDraw(winningBoard)).toBe(false);
  });
});

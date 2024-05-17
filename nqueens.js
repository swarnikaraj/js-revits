// given n*n matrix given n queens to place in the matrix. tell me how  many ways to put them

let board = Array.from({ length: 8 }, () => new Array(8).fill(false));

function isSafe(board, row, col) {
  for (let i = 0; i < row; i++) {
    if (board[i][col]) {
      return false;
    }
  }

  //right diagonal
  let rightMax = Math.min(row, board[0].length - col - 1);
  for (let i = 1; i <= rightMax; i++) {
    if (board[row - i][col + i]) {
      return false;
    }
  }
  //left diagonal
  let leftMax = Math.min(row, col);
  for (let i = 1; i <= leftMax; i++) {
    if (board[row - i][col - i]) {
      return false;
    }
  }
  return true;
}
function displayboard(board) {
  for (let row of board) {
    let str = "";
    // console.log(row.map((cell) => (cell ? "Q" : ".")).join(" "));
    for (let col of row) {
      if (col) {
        str = str + " Q";
      } else {
        str = str + " x";
      }
    }
    console.log(str);
  }
}
function nqueens(board, row) {
  if (row == board.length) {
    displayboard(board);
    console.log();
    return 1;
  }

  let count = 0;

  for (let col = 0; col < board.length; col++) {
    let s = isSafe(board, row, col);
    if (s) {
      board[row][col] = true;
      count = count + nqueens(board, row + 1);

      board[row][col] = false;
    }
  }
}

nqueens(board, 0);

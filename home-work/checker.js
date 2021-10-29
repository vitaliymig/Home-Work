let numbers = [
  [2, 2, 1],
  [2, 1, 1],
  [1, 2, 1],
];

function checker(board) {
  if (board.flat().includes(0)) return -1; // делаем одномерный маасив, и проверяем содержит ли хотя бы один ноль(0)
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
      return board[i][0];
    } // проверяем каждый подмассив на любое введенное, одинаковое значение и возвращаем первое

    if (board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
      return board[0][i];
    } // проверка подмасива с другим подмасивом на любое введенное, одинаковое значение и возвращаем первое
  }

  if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    return board[0][0]; // проверка по диагонали...
  }

  if (board[2][0] === board[1][1] && board[2][0] === board[0][2]) {
    return board[2][0];
  }

  return 0;
}

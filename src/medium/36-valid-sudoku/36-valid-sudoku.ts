type Board = string[][];
type Checklist = { [key: string]: string };

class Solution {
  isValidSudoku(board: Board): boolean {
    for (let i = 0; i < board.length; i++) {
      if (!this.isValidRow(i, board)) return false;
    }

    for (let j = 0; j < board.length; j++) {
      if (!this.isValidColumn(j, board)) return false;
    }

    for (let i = 0; i < board.length; i += 3) {
      for (let k = 0; k < board.length; k += 3) {
        const boxStartCell = { row: i, column: k };
        if (!this.isValidSubBox(boxStartCell, board)) return false;
      }
    }

    return true;
  }

  private isValidRow(row: number, board: Board) {
    const numberList: Checklist = {};
    for (let j = 0; j < board.length; j++) {
      const cellContent = board[row][j];
      if (cellContent in numberList) return false;
      if (cellContent !== ".") numberList[cellContent] = "X";
    }
    return true;
  }

  private isValidColumn(column: number, board: Board) {
    const numberList: Checklist = {};
    for (let i = 0; i < board.length; i++) {
      const cellContent = board[i][column];
      if (cellContent in numberList) return false;
      if (cellContent !== ".") numberList[cellContent] = "X";
    }
    return true;
  }

  private isValidSubBox(
    boxStartCell: { row: number; column: number },
    board: Board
  ) {
    const numberList: Checklist = {};
    const { row, column } = boxStartCell;
    for (let i = row; i < row + 3; i++) {
      for (let j = column; j < column + 3; j++) {
        const cellContent = board[i][j];
        if (cellContent in numberList) return false;
        if (cellContent !== ".") numberList[cellContent] = "X";
      }
    }
    return true;
  }
}

export { Solution, Board };

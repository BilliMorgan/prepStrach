const generateBoard = (whiteQueen, blackQueen) => {
  const board = [];
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      if (
        (i === whiteQueen[1] && j === whiteQueen[0]) ||
        (i === blackQueen[1] && j === blackQueen[0])
      ) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    board.push(row);
  }
  return board;
};
const queenThreat = (board) => {
  let queen1 = [],
    queen2 = [];
    
  board.forEach((row, index) => {
    row.forEach((square, i) => {
      if (queen1.length === 0) {
        if (row[i] === 1) {
          queen1.push(i, index);
        }
      } else {
        if (row[i] === 1) {
          queen2.push(i, index);
        }
      }
    });
  });
  //handle diaganal
  if (
    queen1[1] + queen1[0] === queen2[1] + queen2[0] ||
    queen1[1] + queen2[0] === queen1[0] + queen2[1]
  ) {
    return true;
    //handle same column
  } else if (queen1[0] === queen2[0]) {
    return true;
    //handle same row
  } else if (queen1[1] === queen2[1]) {
    return true;
  }
  return false;
};
let whiteQueen = [0, 0];
let blackQueen = [7, 5];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

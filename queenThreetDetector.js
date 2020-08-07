let whiteQueen = [4, 6];
let blackQueen = [4, 2];

const generateBoard = (whiteQueen, blackQueen) => {
  let board = [];
  for (let z = 0; z < 8; z++) {
    let row = [];
    for (let v = 0; v < 8; v++) {
      if (
        (z === whiteQueen[0] && v === whiteQueen[1]) ||
        (z === blackQueen[0] && v === blackQueen[1])
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

let generatedBoard = generateBoard(whiteQueen, blackQueen);
// queens coordinates:
const queenThreat = (generatedBoard) => {
  let whiteQueen = [];
  let blackQueen = [];
  
  generatedBoard.forEach((board, ind) => {
    board.forEach((row, index) => {
      if (!whiteQueen.length) {
        if (row === 1) {
          whiteQueen.push(ind, index);
        }
      } else {
        if (row === 1) {
          blackQueen.push(ind, index);
        }
      }
    });
  });
  //horizontal and vertical threat
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    return true;
  }
  // diagonal threat
  if (
    Math.abs(whiteQueen[0] - blackQueen[0]) == Math.abs(whiteQueen[1] - blackQueen[1])
  ) {
    return true;
  }
  return false;
};
console.log(generatedBoard.join('\n'));
console.log(queenThreat(generatedBoard));

let whiteQueen = [0, 5];
let blackQueen = [5, 0];

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
console.log(generatedBoard)
    const queenThreat = (generatedBoard) => {
      generatedBoard.forEach(element => {
        let threat = 0;
        element.forEach(queen => {
          if (queen === 1){
            threat + 1
          }}
          )
          console.log(threat)
        
      });



    }




console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
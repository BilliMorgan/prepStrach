const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function (moves) {
  let coorditates = [];
  let x = 0;
  let y = 0;
  for (move of moves) {
    if (move === "north") {
      y++;
    }
    if (move === "west") {
      x--;
    }
    if (move === "east") {
      x++;
    }
    if (move === "south") {
      y--;
    }
  }
  coorditates.push(x, y);
  return coorditates;
};

console.log(finalPosition(moves));

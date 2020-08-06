const squareCode = function (message) {
  // Put your solution here
  let rows = [];
  let output = [];
  let noSpace = message.replace(/ /g, "");
  // remove the space
  let numOfColumns = Math.ceil(Math.sqrt(noSpace.length));
  numOfColumns;
  // calculate the number of columns total
  noSpace = noSpace.split("");

  for (let i = 0; i < noSpace.length; i++) {
    rows.push(noSpace[i]);
    if ((i + 1) % numOfColumns === 0 && (i + 1) !== noSpace.length) {
      rows.push(" ")
};
  };
  rows = rows.join("")

for (let i = 0; i < numOfColumns; i++) {
    output += rows[i];
    for (let j = 0; j < rows.length; j++) {
      if (rows[j - i - 1] === " ") {
        output += rows[j];
      };
    };
  };
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
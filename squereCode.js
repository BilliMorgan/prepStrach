const squareCode = function (message) {
  let squareRoot = Math.ceil(Math.sqrt(message.split(" ").join("").length));
  let splitMessage = message.split(" ").join("");
  let counter = 0;
  let newArray = [];
  let generalArray = [];

  //console.log(squareRoot)
  //console.log(splitMessage)
  for (let letter of splitMessage){
    if (counter != squareRoot){
      newArray.push(letter)
      counter += 1
    }
    else if (counter === squareRoot){
      generalArray.push(newArray)
      counter = 0;
    }


  }
  console.log(generalArray)
  console.log(counter)
  return newArray.join("")
};

console.log(squareCode("chill out"));
//console.log(squareCode("feed the dog"));
// console.log(squareCode("have a nice day"));
// console.log(
//   squareCode(
//     "if man was meant to stay on the ground god would have given us roots"
//   )
// );

const squareCode = function (message) {
  let squareRoot = Math.ceil(Math.sqrt(message.split(" ").join("").length));
  let splitMessage = message.split(" ").join("");
  let counter = 0;
  let newArray = [];
  let generalArray = [];
  let outputString = {}

  for (let letter of splitMessage){
    if (counter !== squareRoot){
      newArray.push(letter)
      counter += 1
    }
    else if (counter === squareRoot){
      generalArray.push(newArray)
      counter = 1;
      newArray = [letter];
    }
  }
  console.log(generalArray)
  for (insideLetter of generalArray){
    for(let i = 0; i < insideLetter.length; i++){
    
      console.log(insideLetter[i])
    }

  }
  console.log(outputString)
 
};

console.log(squareCode("chill out"));
//console.log(squareCode("feed the dog"));
// console.log(squareCode("have a nice day"));
// console.log(
//   squareCode(
//     "if man was meant to stay on the ground god would have given us roots"
//   )
// );

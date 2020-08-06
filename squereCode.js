const squareCode = function (message) {
  let squareRoot = Math.ceil(Math.sqrt(message.split(" ").join("").length));
  let splitMessage = message.split(" ").join("");
  let counter = 0;
  let outputString = {}
  let generalArray = [];
  let newArray = [];
  //console.log(splitMessage)
  
  for (let i = 0; i <= splitMessage.length; i++){
    if(((i+1) % squareRoot) === 0 && (i+1) !== splitMessage.length){
    newArray.push(" ")
    }
  }
  newArray = newArray.join("")
//console.log(newArray)
for(let i = 0; i < squareRoot; i++){
  generalArray += newArray[i];
  for (let j = 0; j < newArray.length; j++){
    if(newArray [j-i-1] === " "){
      generalArray+= newArray[j]
    }
  }
}
return generalArray

//   for (let letter of splitMessage){
//     if (counter !== squareRoot){
//       newArray.push(letter)
//       counter += 1
//     }
//     else if (counter === squareRoot){
//       generalArray.push(newArray)
//       counter = 1;
//       newArray = [letter];
//     }
//   }
//   console.log(generalArray)
//   console.log(outputString)
};

console.log(squareCode("chill out"));
//console.log(squareCode("feed the dog"));
// console.log(squareCode("have a nice day"));
// console.log(
//   squareCode(
//     "if man was meant to stay on the ground god would have given us roots"
//   )
// );

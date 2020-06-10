const multiplicationTable = function (maxValue) {
  let result = '\n';
  for (let i = 1; i <= maxValue; i++) {
    for (let y = 1; y <=maxValue; y++){
      result += (i*y) + " ";
    }  
    result += '\n';
  }
  return result
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

const repeatNumbers = function (data) {
  let str = [];
  for (arr of data) {
   let string = arr[0].toString().repeat(arr[1]);
    str.push(string)
  }
  return str.join(", ");
};

console.log(repeatNumbers([[1, 10]]));

console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);

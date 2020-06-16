const calculateChange = function (total, cash) {
  let change = cash - total;
  console.log(change);
  let changeObject = {};

  if (change / 2000 >= 1) {
    changeObject.twentyDollars = Math.floor(change / 2000);
    change -= Math.floor(change / 2000) * 2000;
  }
  if (change / 1000 >= 1) {
    changeObject.tenDollars = Math.floor(change / 1000);
    change -= Math.floor(change / 1000) * 1000;
  }
  if (change / 500 >= 1) {
    changeObject.fiveDollars = Math.floor(change / 500);
    change -= Math.floor(change / 500) * 500;
  }
  if (change / 200 >= 1) {
    changeObject.twoDollars = Math.floor(change / 200);
    change -= Math.floor(change / 200) * 200;
  }
  if (change / 100 >= 1) {
    changeObject.oneDollars = Math.floor(change / 100);
    change -= Math.floor(change / 100) * 100;
  }
  if (change / 25 >= 1) {
    changeObject.quarter = Math.floor(change / 25);
    change -= Math.floor(change / 25) * 25;
  }
  if (change / 10 >= 1) {
    changeObject.dime = Math.floor(change / 10);
    change -= Math.floor(change / 10) * 10;
  }
  if (change / 5 >= 1) {
    changeObject.nikel = Math.floor(change / 5);
    change -= Math.floor(change / 5) * 5;
  }
  if (change / 1 >= 1) {
    changeObject.penny = Math.floor(change / 1);
    change -= Math.floor(change / 1) * 1;
  }
  return changeObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

//const fs = require("fs");
// var http = require("http");
// var url = require("url");
// const fileUrl = new URL(
//   "http://codefor.ca/wp-content/uploads/2018/06/C4C-dev-challenge-2018.csv"
// );
// console.log(fileUrl)
//fs.readFileSync(fileUrl);

const fetch = require("node-fetch");

fetch("http://codefor.ca/wp-content/uploads/2018/06/C4C-dev-challenge-2018.csv")
  .then((response) => response)
  .then((data) => console.log(data.body._readableState.buffer.head));




// function convertCSVToJSON(str, delimiter = ",") {
//   const titles = str.slice(0, str.indexOf("\n")).split(delimiter);
//   const rows = str.slice(str.indexOf("\n") + 1).split("\n");
//   return rows.map((row) => {
//     const values = row.split(delimiter);
//     return titles.reduce(
//       (object, curr, i) => ((object[curr] = values[i]), object),
//       {}
//     );
//   });
// }

// let data;

// data = "id, name, email\n0, Todd, todd@gmail.com\n1, Petra, petra@gmail.com";
// console.log(convertCSVToJSON(data, ","));

// // Result:
// // 0: {id: "0", " name": " Todd", " email": " todd@gmail.com"}
// // 1: {id: "1", " name": " Petra", " email": " petra@gmail.com"}

// data =
//   "id; name; email\n0; Xander; xander@gmail.com\n1; Frank; frank@gmail.com";
// console.log(convertCSVToJSON(data, ";"));

// // Result:
// // 0: {id: "0", " name": " Xander", " email": " xander@gmail.com"}
// // 1: {id: "1", " name": " Frank", " email": " frank@gmail.com"}

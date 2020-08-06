var csv = require("./jquery.csv.js");



import * as csv from "jquery-csv";
import * as fs from "fs";

const sample =
"http://codefor.ca/wp-content/uploads/2018/06/C4C-dev-challenge-2018.csv";
var result = sample.csv.toObjects(input);
fs.readFile(sample, "UTF-8", (err, fileContent) => {
  if (err) {
    console.log(err);
  }
  csv.toArrays(fileContent, {}, (err, data) => {
    if (err) {
      console.log(err);
    }
    for (let i = 0, len = data.length; i < len; i++) {
      console.log(data[i]);
    }
  });
});
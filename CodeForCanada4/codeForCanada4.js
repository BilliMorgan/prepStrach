const fs = require("fs");
//fetching data from a .csv file
const data = fs.readFileSync("./dataset.csv").toString();

//converting data from .csv file to the json string
const convert = (str) => {
  const titles = str.slice(0, str.indexOf("\n")).split(",");
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  return rows.map((row) => {
    const values = row.split(",");
    return titles.reduce(
      (object, curr, i) => ((object[curr] = values[i]), object),
      {}
    );
  });
};

//summarizing data
const summarizeData = (data) => {
  const outputInfo = {};
  for (element of data) {
    if (outputInfo[element.violation_category]) {
      outputInfo[element.violation_category].numberOfCases += 1;

      if (
        new Date(outputInfo[element.violation_category].latestDate).getTime() <
        new Date(element.violation_date).getTime()
      ) {
        outputInfo[element.violation_category].latestDate =
          element.violation_date;
      }
      if (
        new Date(
          outputInfo[element.violation_category].earliestDate
        ).getTime() > new Date(element.violation_date).getTime
      ) {
        outputInfo[element.violation_category].earliestDate =
          element.violation_date;
      }
    } else {
      outputInfo[element.violation_category] = {
        numberOfCases: 1,
        earliestDate: element.violation_date,
        latestDate: element.violation_date,
      };
    }
  }
  return outputInfo;
};
console.log(summarizeData(convert(data)));

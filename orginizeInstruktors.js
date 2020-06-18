const organizeInstructors = function (instructors) {
  let outputObject = {};
  for (record of instructors) {
    let courseName = record.course;
    
    if (courseName in outputObject) {
      outputObject[courseName].push(record.name)
      
    } else {
      outputObject[courseName] = [record.name];
    }
  }
  return outputObject;
};


console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);

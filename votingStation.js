const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

chooseStations = (stations) => {
  let goodStations = [];
  stations.forEach((element) => {
    if (element[1] >= 20) {
      if (element[2] === 'school' || element[2] === 'community centre') {
        goodStations.push(element[0])
      }
    }
  });
return goodStations;
};

console.log(chooseStations(stations));

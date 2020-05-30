const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";


const judgeVegetable = function (vegetables, metric) {
  let biggerInput = 0;
  let currentSubmiter = "";

  vegetables.forEach(element => {
    if(element[metric] > biggerInput){
      biggerInput = element[metric]
      console.log(biggerInput)
      currentSubmiter = element.submitter
      console.log(currentSubmiter)
    }
  
  })
  return currentSubmiter;
};
judgeVegetable(vegetables, metric);

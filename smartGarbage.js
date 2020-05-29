const smartGarbage = function (trash, bins) {
  if(trash === "recycling"){
    bins.recycling += 1;
  }
  if(trash === "waste"){
    bins.waste += 1;
  }
  if(trash === "compost"){
    bins.compost += 1;
  }
  return bins;
};


smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 });
const urlDecode = function (text) {
  let outputObject = {};
  let newInput = text.split("&");

  for (word of newInput) {
    outputObject[word.split("=")[0]] = word
      .split("=")[1]
      .replace(/%20/g, " ")
  }

  return outputObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
